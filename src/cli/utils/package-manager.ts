import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun'

/**
 * Detects the package manager used in the project
 * @returns The detected package manager or 'npm' as fallback
 */
export function detectPackageManager(): PackageManager {
  // Check for lockfiles
  const cwd = process.cwd()
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
    return 'yarn'
  }
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm'
  }
  if (fs.existsSync(path.join(cwd, 'package-lock.json'))) {
    return 'npm'
  }
  if (fs.existsSync(path.join(cwd, 'bun.lock'))) {
    return 'bun'
  }

  // Default to npm
  return 'npm'
}

/**
 * Installs dependencies using the detected or specified package manager
 * @param dependencies Array of dependencies to install
 * @param packageManager Optional package manager to use
 * @param isDev Whether to install as dev dependencies
 * @returns The command output
 */
export function installDependencies(
  dependencies: string[],
  packageManager?: PackageManager,
  isDev = false,
): string {
  const pm = packageManager || detectPackageManager()
  const depsString = dependencies.join(' ')

  let command: string

  switch (pm) {
    case 'yarn':
      command = `yarn add ${isDev ? '--dev ' : ''}${depsString}`
      break
    case 'pnpm':
      command = `pnpm add ${isDev ? '--save-dev ' : ''}${depsString}`
      break
    case 'bun':
      command = `bun add ${isDev ? '--dev ' : ''}${depsString}`
      break
    default:
      command = `npm install ${isDev ? '--save-dev ' : ''}${depsString}`
  }

  try {
    const output = execSync(command, { encoding: 'utf8' })
    return output
  }
  catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to install dependencies: ${error.message}`)
    }
    throw error
  }
}

