import { execSync } from 'child_process'
import chalk from 'chalk'

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

  console.log(chalk.cyan('Installing dependencies...'))
  execSync(`pnpm add ${additionalDeps.join(' ')}`, { stdio: 'ignore' })

  console.log(chalk.cyan('Installing devDependencies...'))
  execSync(`pnpm add -D ${additionalDevDeps.join(' ')}`, { stdio: 'ignore' })
}
