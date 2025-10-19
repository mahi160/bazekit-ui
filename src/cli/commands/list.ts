import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pathExists } from '../utils/file-operations'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface ComponentInfo {
  name: string
  hasStyles: boolean
  hasTests: boolean
  hasStories: boolean
  files: string[]
  fileCount: number
}

export async function listCommand(filter?: string) {
  const componentsDir = path.join(__dirname, '../../components')

  if (!pathExists(componentsDir)) {
    console.error('Components directory not found.')
    return
  }

  try {
    // Read all component directories
    const entries = await fs.promises.readdir(componentsDir, { withFileTypes: true })
    const componentDirs = entries.filter(entry => entry.isDirectory())

    if (componentDirs.length === 0) {
      console.log('No components available.')
      return
    }

    // Process components to gather information
    const componentsInfo: ComponentInfo[] = []

    for (const dir of componentDirs) {
      const componentName = dir.name

      // Apply filter if provided
      if (filter && !componentName.toLowerCase().includes(filter.toLowerCase())) {
        continue
      }

      const componentPath = path.join(componentsDir, componentName)
      const files = await fs.promises.readdir(componentPath)

      // Gather component information
      const info: ComponentInfo = {
        name: componentName,
        hasStyles: files.some(file => file.endsWith('.css') || file.endsWith('.scss')),
        hasTests: files.some(file => file.includes('.test.')),
        hasStories: files.some(file => file.includes('.stories.')),
        files,
        fileCount: files.length,
      }

      componentsInfo.push(info)
    }

    // Display results
    if (componentsInfo.length === 0) {
      console.log(`No components found${filter ? ` matching '${filter}'` : ''}.`)
      return
    }

    console.log(`\nAvailable components${filter ? ` matching '${filter}'` : ''}:\n`)

    // Format and display component information
    componentsInfo.forEach((info) => {
      console.log(`${info.name}`)
      console.log(`  Files: ${info.fileCount}`)
      console.log(`  Features: ${[
        info.hasStyles ? 'CSS' : null,
        info.hasTests ? 'Tests' : null,
        info.hasStories ? 'Stories' : null,
      ].filter(Boolean).join(', ') || 'None'}`)
      console.log(`  Contains: ${info.files.slice(0, 3).join(', ')}${info.files.length > 3 ? '...' : ''}`)
      console.log('')
    })

    console.log(`Total: ${componentsInfo.length} component(s)`)
  }
  catch (error) {
    console.error('Error listing components:', error)
  }
}
