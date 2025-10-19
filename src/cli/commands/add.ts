import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import inquirer from 'inquirer'
import { copyDirectoryWithFilter, pathExists } from '../utils/file-operations'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function addCommand(componentName?: string) {
  // Source components directory
  const sourceComponentsDir = path.join(__dirname, '../../components')

  // Get available components
  const availableComponents = await getAvailableComponents(sourceComponentsDir)

  if (availableComponents.length === 0) {
    console.error('No components found in the repository.')
    return
  }

  // If no component name provided, prompt for selection
  let selectedComponents: string[] = []

  if (!componentName) {
    const answers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'components',
        message: 'Select components to add:',
        choices: availableComponents,
        validate: input => input.length > 0 ? true : 'Please select at least one component',
      },
    ])
    selectedComponents = answers.components
  }
  else {
    // Check if the specified component exists
    if (availableComponents.includes(componentName)) {
      selectedComponents = [componentName]
    }
    else {
      console.error(`Component '${componentName}' not found.`)
      console.log('Available components:', availableComponents.join(', '))
      return
    }
  }

  // Load configuration to get the target components directory
  const configPath = path.join(process.cwd(), '.bizkitrc.json')
  let targetComponentsDir: string

  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    targetComponentsDir = path.join(process.cwd(), config.componentDir)
  }
  else {
    // If no config file, ask for the target directory
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'componentDir',
        message: 'Where should the components be added?',
        default: 'src/components',
      },
    ])
    targetComponentsDir = path.join(process.cwd(), answers.componentDir)
  }

  // Make sure target directory exists
  if (!fs.existsSync(targetComponentsDir)) {
    fs.mkdirSync(targetComponentsDir, { recursive: true })
  }

  // Filter to exclude test and story files
  const excludePatterns = [/\.test\.tsx?$/, /\.stories\.tsx?$/]

  // Copy each selected component
  for (const component of selectedComponents) {
    const sourceDir = path.join(sourceComponentsDir, component)
    const targetDir = path.join(targetComponentsDir, component)

    // Check if component already exists in target directory
    if (pathExists(targetDir)) {
      const answer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: `Component '${component}' already exists. Overwrite?`,
          default: false,
        },
      ])

      if (!answer.overwrite) {
        console.log(`Skipping '${component}'`)
        continue
      }
    }

    try {
      await copyDirectoryWithFilter(sourceDir, targetDir, excludePatterns)
      console.log(`Added component '${component}'`)
    }
    catch (error) {
      console.error(`Failed to copy component '${component}':`, error)
    }
  }

  console.log('Component addition completed!')
}

/**
 * Gets a list of available component names
 * @param componentsDir The directory containing component folders
 * @returns Array of component folder names
 */
async function getAvailableComponents(componentsDir: string): Promise<string[]> {
  try {
    const entries = await fs.promises.readdir(componentsDir, { withFileTypes: true })
    return entries
      .filter(entry => entry.isDirectory())
      .map(dir => dir.name)
  }
  catch (error) {
    console.error('Error reading components directory:', error)
    return []
  }
}
