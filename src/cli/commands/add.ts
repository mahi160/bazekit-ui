import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import inquirer from 'inquirer'
import { copyDirectoryWithFilter, createDirectory, pathExists } from '../utils/file-operations'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface ComponentAddOptions {
  force?: boolean
  all?: boolean
}

interface BizkitConfig {
  componentDir: string
  mainFilePath: string
  mainCssPath: string
  themes: string | string[]
}

/**
 * Command to add components to a project
 * @param componentName Optional name of component to add
 * @param options Command options
 */
export async function addCommand(componentName?: string, options: ComponentAddOptions = {}): Promise<void> {
  try {
    // Source components directory
    const sourceComponentsDir = path.join(__dirname, '../../components')

    // Get available components
    const availableComponents = await getAvailableComponents(sourceComponentsDir)

    if (availableComponents.length === 0) {
      console.error('No components found in the repository.')
      return
    }

    // Determine which components to add
    const selectedComponents = await selectComponents(componentName, availableComponents, options)

    if (selectedComponents.length === 0) {
      return // User cancelled or no components selected
    }

    // Get target directory from config or prompt
    const targetComponentsDir = await getTargetDirectory()

    // Ensure target directory exists
    await createDirectory(targetComponentsDir)

    // Filter to exclude test and story files
    const excludePatterns = [/\.test\.tsx?$/, /\.stories\.tsx?$/]

    // Copy components
    const results = await copyComponents(
      sourceComponentsDir,
      targetComponentsDir,
      selectedComponents,
      excludePatterns,
      options.force,
    )

    // Show summary
    console.info(`\nSummary: ${results.added} added, ${results.skipped} skipped, ${results.failed} failed`)

    if (results.added > 0) {
      console.info('Component addition completed!')
    }
  }
  catch (error) {
    console.error('Failed to add component(s):', error instanceof Error ? error.message : String(error))
  }
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
      .sort() // Sort alphabetically for better UX
  }
  catch (error) {
    console.error('Error reading components directory:', error)
    return []
  }
}

/**
 * Determine which components to add based on user input and options
 */
async function selectComponents(
  componentName: string | undefined,
  availableComponents: string[],
  options: ComponentAddOptions,
): Promise<string[]> {
  // If --all flag is set, add all components
  if (options.all) {
    return availableComponents
  }

  // If component name is provided, check if it exists
  if (componentName) {
    if (availableComponents.includes(componentName)) {
      return [componentName]
    }
    else {
      console.error(`Component '${componentName}' not found.`)
      console.info('Available components:', availableComponents.join(', '))
      return []
    }
  }

  // Otherwise, prompt for selection
  const answers = await inquirer.prompt<{ components: string[] }>([{
    type: 'checkbox',
    name: 'components',
    message: 'Select components to add:',
    choices: availableComponents,
    validate: input => input.length > 0 ? true : 'Please select at least one component',
    pageSize: Math.min(15, availableComponents.length + 3), // Better UX for many components
  }])

  return answers.components
}

/**
 * Get the target directory from config or by prompting the user
 */
async function getTargetDirectory(): Promise<string> {
  const configPath = path.join(process.cwd(), '.bizkitrc.json')

  if (fs.existsSync(configPath)) {
    try {
      const content = await fs.promises.readFile(configPath, 'utf8')
      const config = JSON.parse(content) as BizkitConfig
      return path.join(process.cwd(), config.componentDir)
    }
    catch (error) {
      console.warn('Error reading config file, falling back to prompt:', error)
    }
  }

  // If no valid config file, ask for the target directory
  const answers = await inquirer.prompt<{ componentDir: string }>([{
    type: 'input',
    name: 'componentDir',
    message: 'Where should the components be added?',
    default: 'src/components',
  }])

  return path.join(process.cwd(), answers.componentDir)
}

/**
 * Copy selected components from source to target directory
 */
async function copyComponents(
  sourceDir: string,
  targetDir: string,
  components: string[],
  excludePatterns: RegExp[],
  force = false,
): Promise<{ added: number, skipped: number, failed: number }> {
  let added = 0
  let skipped = 0
  let failed = 0

  for (const component of components) {
    const sourcePath = path.join(sourceDir, component)
    const targetPath = path.join(targetDir, component)

    // Check if component already exists and prompt for overwrite if needed
    if (pathExists(targetPath) && !force) {
      const answer = await inquirer.prompt<{ overwrite: boolean }>([{
        type: 'confirm',
        name: 'overwrite',
        message: `Component '${component}' already exists. Overwrite?`,
        default: false,
      }])

      if (!answer.overwrite) {
        console.info(`Skipping '${component}'`)
        skipped++
        continue
      }
    }

    try {
      await copyDirectoryWithFilter(sourcePath, targetPath, excludePatterns)
      console.info(`Added component '${component}'`)
      added++
    }
    catch (error) {
      console.error(`Failed to copy component '${component}':`, error)
      failed++
    }
  }

  return { added, skipped, failed }
}
