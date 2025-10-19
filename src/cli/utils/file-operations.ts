import fs from 'node:fs'
import path from 'node:path'

// Common file types and patterns
export const FILE_PATTERNS = {
  TYPESCRIPT: /\.tsx?$/,
  JAVASCRIPT: /\.jsx?$/,
  CSS: /\.css$/,
  SCSS: /\.scss$/,
  TESTS: /\.test\.|\.spec\./,
  STORIES: /\.stories\./,
}

/**
 * Creates a directory if it doesn't exist
 * @param dirPath Path to the directory to create
 * @param recursive Whether to create parent directories if they don't exist
 * @returns True if the directory was created, false if it already exists
 * @throws Error if directory creation fails for a reason other than it already exists
 */
export async function createDirectory(dirPath: string, recursive = true): Promise<boolean> {
  try {
    await fs.promises.mkdir(dirPath, { recursive })
    return true
  }
  catch (err: unknown) {
    const error = err as { code?: string }
    if (error.code === 'EEXIST') {
      return false
    }
    throw err
  }
}

/**
 * Copies a file from source to destination
 * @param source Source file path
 * @param destination Destination file path
 * @throws Error if file copy fails
 */
export async function copyFile(source: string, destination: string): Promise<void> {
  await fs.promises.copyFile(source, destination)
}

/**
 * Copies a directory recursively
 * @param source Source directory path
 * @param destination Destination directory path
 * @throws Error if directory copy fails
 */
export async function copyDirectory(source: string, destination: string): Promise<void> {
  await createDirectory(destination)
  const entries = await fs.promises.readdir(source, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name)
    const destPath = path.join(destination, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath)
    }
    else {
      await copyFile(srcPath, destPath)
    }
  }
}

/**
 * Copies a directory recursively with file filtering
 * @param source Source directory path
 * @param destination Destination directory path
 * @param excludePatterns Array of regex patterns for files to exclude
 * @throws Error if directory copy fails
 */
export async function copyDirectoryWithFilter(
  source: string,
  destination: string,
  excludePatterns: RegExp[] = [],
): Promise<void> {
  await createDirectory(destination)
  const entries = await fs.promises.readdir(source, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name)
    const destPath = path.join(destination, entry.name)

    // Skip files that match the exclude patterns
    const shouldExclude = excludePatterns.some(pattern => pattern.test(entry.name))
    if (shouldExclude) {
      continue
    }

    if (entry.isDirectory()) {
      await copyDirectoryWithFilter(srcPath, destPath, excludePatterns)
    }
    else {
      await copyFile(srcPath, destPath)
    }
  }
}

/**
 * Reads the content of a file
 * @param filePath Path to the file
 * @returns The file content as a string
 * @throws Error if file read fails
 */
export async function readFile(filePath: string): Promise<string> {
  return await fs.promises.readFile(filePath, 'utf8')
}

/**
 * Reads and parses a JSON file
 * @param filePath Path to the JSON file
 * @returns Parsed JSON content
 * @throws Error if file read or JSON parsing fails
 */
export async function readJsonFile<T = unknown>(filePath: string): Promise<T> {
  const content = await readFile(filePath)
  return JSON.parse(content) as T
}

/**
 * Writes content to a file
 * @param filePath Path to the file
 * @param content Content to write
 * @throws Error if file write fails
 */
export async function writeFile(filePath: string, content: string): Promise<void> {
  await fs.promises.writeFile(filePath, content, 'utf8')
}

/**
 * Checks if a file or directory exists
 * @param path Path to check
 * @returns True if the path exists, false otherwise
 */
export function pathExists(path: string): boolean {
  return fs.existsSync(path)
}

/**
 * Appends content to a file. Creates the file if it doesn't exist
 * @param filePath Path to the file
 * @param content Content to append
 * @throws Error if file append fails
 */
export async function appendToFile(filePath: string, content: string): Promise<void> {
  await fs.promises.appendFile(filePath, content, 'utf8')
}

/**
 * Adds an import statement to a JavaScript/TypeScript file
 * @param filePath Path to the file
 * @param importStatement Import statement to add
 * @throws Error if file operation fails
 */
export async function addImportToJsFile(filePath: string, importStatement: string): Promise<void> {
  let content = ''

  if (pathExists(filePath)) {
    content = await readFile(filePath)
    if (!content.includes(importStatement)) {
      content = `${importStatement}\n${content}`
    }
  }
  else {
    content = `${importStatement}\n`
  }

  await writeFile(filePath, content)
}

/**
 * Adds an import statement to a CSS file
 * @param filePath Path to the file
 * @param importStatement Import statement to add
 * @throws Error if file operation fails
 */
export async function addImportToCssFile(filePath: string, importStatement: string): Promise<void> {
  let content = ''

  if (pathExists(filePath)) {
    content = await readFile(filePath)
    if (!content.includes(importStatement)) {
      content = `${importStatement}\n${content}`
    }
  }
  else {
    content = `${importStatement}\n`
  }

  await writeFile(filePath, content)
}
