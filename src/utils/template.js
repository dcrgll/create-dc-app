import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function copyTemplateFiles(projectPath) {
  console.log(chalk.cyan('Copying template files...'))
  const templateDir = path.join(__dirname, '..', 'template')

  // Copy all files/folders from template root to project root, except src directory
  const rootFiles = fs.readdirSync(templateDir)
  rootFiles.forEach((file) => {
    if (file !== 'src') {
      fs.copySync(path.join(templateDir, file), path.join(projectPath, file), {
        overwrite: true
      })
    }
  })

  // Handle src directory contents
  const srcTemplateDir = path.join(templateDir, 'src')
  if (fs.existsSync(srcTemplateDir)) {
    const projectSrcDir = path.join(projectPath, 'src')
    fs.ensureDirSync(projectSrcDir)

    // First, completely remove and replace the app directory if it exists in template
    const templateAppDir = path.join(srcTemplateDir, 'app')
    const projectAppDir = path.join(projectSrcDir, 'app')
    if (fs.existsSync(templateAppDir)) {
      fs.removeSync(projectAppDir)
      fs.copySync(templateAppDir, projectAppDir)
    }

    // Copy all other src files/folders, overwriting existing ones
    const srcFiles = fs.readdirSync(srcTemplateDir)
    srcFiles.forEach((file) => {
      if (file !== 'app') {
        // Skip app directory as we've already handled it
        fs.copySync(
          path.join(srcTemplateDir, file),
          path.join(projectSrcDir, file),
          { overwrite: true }
        )
      }
    })
  }
}
