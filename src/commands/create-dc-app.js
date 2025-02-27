import { execSync } from 'child_process'
import path from 'path'
import chalk from 'chalk'
import fs from 'fs-extra'

import { configurePackage } from '../utils/configure-package.js'
import { createNextApp } from '../utils/create-next-app.js'
import { installDependencies } from '../utils/dependencies.js'
import { promptProjectName } from '../utils/prompts.js'
import { copyTemplateFiles } from '../utils/template.js'

export async function createApp(projectName, options) {
  try {
    projectName = projectName || (await promptProjectName())
    console.log(chalk.cyan('Creating your app...'))

    const projectPath = path.join(process.cwd(), projectName)
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red(`Error: Directory ${projectName} already exists`))

      process.exit(1)
    }

    await createNextApp(projectName)
    process.chdir(projectPath)

    await installDependencies()
    await configurePackage(projectPath)
    await copyTemplateFiles(projectPath)

    console.log('Successfully created your app!')

    console.log('\nNext steps:')
    console.log(chalk.cyan(`  cd ${projectName}`))
    console.log(chalk.cyan('  pnpm dev'))
  } catch (error) {
    console.error(chalk.red('Error creating project:'), error)
    process.exit(1)
  }
}
