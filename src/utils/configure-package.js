import path from 'path'
import fs from 'fs-extra'

export async function configurePackage(projectPath) {
  const packageJsonPath = path.join(projectPath, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  // Add or modify properties
  packageJson.scripts = {
    ...packageJson.scripts,
    'lint:fix': 'eslint --fix .',
    format: 'prettier --write .',
    'format:check': 'prettier --check .'
  }

  // Remove specific devDependencies
  if (packageJson.devDependencies) {
    delete packageJson.devDependencies['eslint-config-next']
    delete packageJson.devDependencies['@eslint/eslintrc']
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n')
}
