import path from 'node:path'
import process from 'node:process'
import inquirer from 'inquirer'
import {
  addImportToCssFile,
  createDirectory,
  readFile,
  writeFile,
} from '../utils/file-operations'
import { detectPackageManager, installDependencies } from '../utils/package-manager'
import { detectProjectType } from '../utils/project-detection'

interface InitAnswers {
  componentDir: string
  mainFilePath: string
  mainCssPath: string
  themes: string | string[]
}

/**
 * Command to initialize a new Bizkit project
 */
export async function initCommand(): Promise<void> {
  try {
    // Check if project type is compatible
    const projectType = detectProjectType()
    if (projectType.isReact) {
      console.error('Bizkit initialization aborted: React project detected.')
      return
    }

    // Get configuration from user
    const answers = await promptForConfig()
    
    // Setup project directories and files
    await setupProjectStructure(answers)
    
    // Install dependencies
    try {
      const packageManager = detectPackageManager()
      await installDependencies(['@base-ui-components/react@latest'], packageManager)
    } catch {
      console.warn('You may need to install @base-ui-components/react@latest manually')
    }
    
    console.info('Project initialized successfully!')
  } catch (error) {
    console.error('Initialization failed:', error instanceof Error ? error.message : String(error))
  }
}

/**
 * Prompt the user for project configuration
 */
async function promptForConfig(): Promise<InitAnswers> {
  return inquirer.prompt<InitAnswers>([
    {
      type: 'input',
      name: 'componentDir',
      message: 'Where should components be stored?',
      default: 'src/components/base',
    },
    {
      type: 'input',
      name: 'mainFilePath',
      message: 'Path to your main TS/JS file:',
      default: 'src/main.ts',
    },
    {
      type: 'input',
      name: 'mainCssPath',
      message: 'Path to your main CSS file:',
      default: 'src/index.css',
    },
    {
      type: 'list',
      name: 'themes',
      message: 'Select themes to include:',
      choices: ['default'],
      default: 'default',
    },
  ])
}

/**
 * Setup project structure based on user configuration
 */
async function setupProjectStructure(config: InitAnswers): Promise<void> {
  const cwd = process.cwd()
  
  // Create directories
  const targetDir = path.join(cwd, config.componentDir)
  const mainCssDir = path.dirname(path.join(cwd, config.mainCssPath))
  const stylesTargetDir = path.join(targetDir, 'styles')
  
  await Promise.all([
    createDirectory(targetDir),
    createDirectory(mainCssDir),
    createDirectory(stylesTargetDir)
  ])
  
  // Copy style files
  const sourceStylesDir = path.join(__dirname, '../../../src/styles')
  const styleFiles = ['index.css', 'reset.css', 'theme.css']
  
  await Promise.all(styleFiles.map(async file => {
    const content = await readFile(path.join(sourceStylesDir, file))
    return writeFile(path.join(stylesTargetDir, file), content)
  }))
  
  // Update CSS imports
  const mainCssPath = path.join(cwd, config.mainCssPath)
  const relativeImportPath = path.relative(
    path.dirname(mainCssPath),
    path.join(stylesTargetDir, 'index.css'),
  ).replace(/\\/g, '/')
  
  await addImportToCssFile(mainCssPath, `@import url('${relativeImportPath}');`)
  
  // Create config file
  const configFilePath = path.join(cwd, '.bizkitrc.json')
  const configData = {
    componentDir: config.componentDir,
    mainFilePath: config.mainFilePath,
    mainCssPath: config.mainCssPath,
    themes: config.themes,
  }
  
  await writeFile(configFilePath, JSON.stringify(configData, null, 2))
}
