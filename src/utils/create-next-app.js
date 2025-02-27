import { execSync } from 'child_process'

import { getCreateCommand, getPackageManager } from './get-package-manager.js'

export async function createNextApp(projectName) {
  const packageManager = getPackageManager()
  const createCmd = getCreateCommand(packageManager)

  const createNextAppCommand = [
    createCmd,
    'create-next-app@latest',
    projectName,
    '--typescript',
    '--tailwind',
    '--eslint',
    '--empty',
    '--app',
    '--src-dir',
    '--turbopack',
    '--import-alias',
    '@/*',
    '--no-git',
    `--use-${packageManager}`
  ].join(' ')

  execSync(createNextAppCommand, { stdio: 'ignore' })
}
