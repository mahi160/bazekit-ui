import process from 'node:process'
import { program } from 'commander'
import { addCommand } from './commands/add'
import { initCommand } from './commands/init'
import { listCommand } from './commands/list'

program
  .name('my-component-cli')
  .description('CLI for adding components to your project')
  .version('1.0.0')

program
  .command('init')
  .description('Initialize the project with component library setup')
  .action(initCommand)

program
  .command('add')
  .description('Add a component to your project')
  .argument('<component>', 'Name of the component to add')
  .action(addCommand)

program
  .command('list')
  .description('List available components')
  .action(listCommand)

program.parse(process.argv)
