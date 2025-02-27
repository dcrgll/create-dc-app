import { execSync } from 'child_process'

export async function createNextApp(projectName) {
  const createNextAppCommand = [
    'pnpm',
    'dlx',
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
    '--use-pnpm'
  ].join(' ')

  execSync(createNextAppCommand, { stdio: 'ignore' })
}
