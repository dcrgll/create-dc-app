import { execSync } from 'child_process'
import chalk from 'chalk'

import { getInstallCommand, getPackageManager } from './get-package-manager.js'

export async function installDependencies() {
  const additionalDeps = [
    'lucide-react',
    'clsx',
    'tailwind-merge',
    'class-variance-authority',
    'react-hook-form',
    '@radix-ui/react-slot',
    'tailwindcss-animate',
    'next-themes',
    '@t3-oss/env-nextjs',
    'zod'
  ]
  const additionalDevDeps = [
    '@dc_/eslint-config-next',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson'
  ]

  const packageManager = getPackageManager()
  const installCmd = getInstallCommand(packageManager)
  const installDevCmd = getInstallCommand(packageManager, true)

  console.log(chalk.cyan('Installing dependencies...'))
  execSync(`${installCmd} ${additionalDeps.join(' ')}`, { stdio: 'ignore' })

  console.log(chalk.cyan('Installing devDependencies...'))
  execSync(`${installDevCmd} ${additionalDevDeps.join(' ')}`, {
    stdio: 'ignore'
  })
}
