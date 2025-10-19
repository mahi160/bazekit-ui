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

interface ListOptions {
  json?: boolean
  detailed?: boolean
}

/**
 * List available components with optional filtering
 * @param filter Optional string to filter component names
 * @param options Display options
 */
export async function listCommand(filter?: string, options: ListOptions = {}): Promise<void> {
  try {
    const componentsDir = path.join(__dirname, '../../components')

    if (!pathExists(componentsDir)) {
      console.error('Components directory not found.')
      return
    }

    // Get component directories
    const components = await getComponentsInfo(componentsDir, filter)

    if (components.length === 0) {
      console.info(`No components found${filter ? ` matching '${filter}'` : ''}.`)
      return
    }

    // Display results in requested format
    if (options.json) {
      displayAsJson(components)
    }
    else {
      displayFormatted(components, filter, options.detailed)
    }
  }
  catch (error) {
    console.error('Error listing components:', error instanceof Error ? error.message : String(error))
  }
}

/**
 * Gather information about components in the directory
 * @param componentsDir Directory containing component folders
 * @param filter Optional name filter
 * @returns Array of component info objects
 */
async function getComponentsInfo(componentsDir: string, filter?: string): Promise<ComponentInfo[]> {
  // Read component directories
  const entries = await fs.promises.readdir(componentsDir, { withFileTypes: true })
  const componentDirs = entries.filter(entry => entry.isDirectory())

  if (componentDirs.length === 0) {
    return []
  }

  // Process components in parallel for better performance
  const componentsPromises = componentDirs.map(async (dir) => {
    const componentName = dir.name

    // Apply filter if provided
    if (filter && !componentName.toLowerCase().includes(filter.toLowerCase())) {
      return null
    }

    const componentPath = path.join(componentsDir, componentName)
    const files = await fs.promises.readdir(componentPath)

    return {
      name: componentName,
      hasStyles: files.some(file => file.endsWith('.css') || file.endsWith('.scss')),
      hasTests: files.some(file => file.includes('.test.')),
      hasStories: files.some(file => file.includes('.stories.')),
      files,
      fileCount: files.length,
    }
  })

  // Wait for all component info to be gathered
  const results = await Promise.all(componentsPromises)

  // Filter out null results (from filter) and sort by name
  return results
    .filter((info): info is ComponentInfo => info !== null)
    .sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Display components as formatted text
 * @param components Array of component information
 * @param filter Optional filter that was applied
 * @param detailed Whether to show detailed information
 */
function displayFormatted(components: ComponentInfo[], filter?: string, detailed = false): void {
  console.info(`\nAvailable components${filter ? ` matching '${filter}'` : ''}:\n`)

  components.forEach((info) => {
    console.info(`${info.name}`)

    if (detailed) {
      console.info(`  Files: ${info.fileCount}`)
      console.info(`  Features: ${[
        info.hasStyles ? 'CSS' : null,
        info.hasTests ? 'Tests' : null,
        info.hasStories ? 'Stories' : null,
      ].filter(Boolean).join(', ') || 'None'}`)
      console.info(`  Contains: ${info.files.slice(0, 3).join(', ')}${info.files.length > 3 ? '...' : ''}`)
    }

    if (detailed)
      console.info('')
  })

  console.info(`\nTotal: ${components.length} component(s)`)
}

/**
 * Display components as JSON
 * @param components Array of component information
 */
function displayAsJson(components: ComponentInfo[]): void {
  console.info(JSON.stringify(components, null, 2))
}
