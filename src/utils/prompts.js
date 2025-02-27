import inquirer from 'inquirer'

export async function promptProjectName() {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project named?',
      default: 'my-app'
    }
  ])
  return response.projectName
}
