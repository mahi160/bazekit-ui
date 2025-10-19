import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import inquirer from 'inquirer'

export async function initCommand() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'componentDir',
      message: 'Where should components be stored?',
      default: 'src/components',
    },
  ])

  const targetDir = path.join(process.cwd(), answers.componentDir)
  try {
    await fs.promises.mkdir(targetDir, { recursive: true })
  }
  catch (err: unknown) {
    const error = err as { code?: string }
    if (error.code === 'EEXIST') {
      console.info('Folder already exists, skipping creation.')
    }
  }

  console.info('Project initialized successfully!')
}
