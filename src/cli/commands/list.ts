import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function listCommand() {
  const componentsDir = path.join(__dirname, '../../components')
  const components = await fs.readdir(componentsDir)
  console.log('Available components:')
  components.forEach(component => console.log(`- ${component}`))
}
