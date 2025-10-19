import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import inquirer from 'inquirer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function addCommand(component: string) {
  const componentDir = path.join(__dirname, '../../components', component)
  if (!fs.existsSync(componentDir)) {
    console.error(`Component ${component} not found.`)
    return
  }

  const componentFile = path.join(componentDir, `${component}.tsx`)
}
