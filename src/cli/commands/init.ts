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

export async function initCommand() {
  const projectType = detectProjectType()
  if (projectType.isReact) {
    console.error('Bizkit initialization aborted: React project detected.')
    return
  }

  const answers = await inquirer.prompt([
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

  const targetDir = path.join(process.cwd(), answers.componentDir)
  await createDirectory(targetDir)

  const mainCssDir = path.dirname(path.join(process.cwd(), answers.mainCssPath))
  await createDirectory(mainCssDir)

  const sourceStylesDir = path.join(__dirname, '../../../src/styles')
  const stylesTargetDir = path.join(targetDir, 'styles')
  await createDirectory(stylesTargetDir)

  const files = ['index.css', 'reset.css', 'theme.css']
  for (const file of files) {
    const content = await readFile(path.join(sourceStylesDir, file))
    await writeFile(path.join(stylesTargetDir, file), content)
  }

  const mainCssPath = path.join(process.cwd(), answers.mainCssPath)
  const relativeImportPath = path.relative(
    path.dirname(mainCssPath),
    path.join(stylesTargetDir, 'index.css'),
  ).replace(/\\/g, '/')

  await addImportToCssFile(mainCssPath, `@import url('${relativeImportPath}');`)

  const configFilePath = path.join(process.cwd(), '.bizkitrc.json')
  const configData = {
    componentDir: answers.componentDir,
    mainFilePath: answers.mainFilePath,
    mainCssPath: answers.mainCssPath,
    themes: answers.themes,
  }
  await writeFile(configFilePath, JSON.stringify(configData, null, 2))

  try {
    const packageManager = detectPackageManager()
    installDependencies(['@base-ui-components/react@latest'], packageManager)
  }
  catch (_) {
    console.warn('You may need to install @base-ui-components/react@latest manually')
  }

  console.info('Project initialized successfully!')
}
