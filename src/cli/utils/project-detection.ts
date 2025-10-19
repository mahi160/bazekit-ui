import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * Project type detection result
 */
export interface ProjectTypeResult {
  isReact: boolean
  isVue: boolean
  isAngular: boolean
  isNode: boolean
}

/**
 * Detects the project type by analyzing dependencies and configuration files
 * @returns Object with boolean flags for detected project types
 */
export function detectProjectType(): ProjectTypeResult {
  const result: ProjectTypeResult = {
    isReact: false,
    isVue: false,
    isAngular: false,
    isNode: true,
  }

  // Check for package.json
  const packageJsonPath = path.join(process.cwd(), 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
      const dependencies = {
        ...packageJson.dependencies || {},
        ...packageJson.devDependencies || {},
      }

      if (dependencies.react) {
        result.isReact = true
      }

      if (dependencies.vue) {
        result.isVue = true
      }

      if (dependencies['@angular/core']) {
        result.isAngular = true
      }
    }
    catch (error) {
      console.error('Error parsing package.json:', error)
    }
  }

  const fileChecks = [
    { file: 'angular.json', type: 'isAngular' },
    { file: 'react-app-env.d.ts', type: 'isReact' },
    { file: 'vue.config.js', type: 'isVue' },
  ]

  for (const { file, type } of fileChecks) {
    if (fs.existsSync(path.join(process.cwd(), file))) {
      result[type as keyof ProjectTypeResult] = true
    }
  }

  return result
}
