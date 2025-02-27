#!/usr/bin/env node
import { program } from 'commander'

import { createApp } from './commands/create-dc-app.js'
import { setupProgram } from './utils/setup-program.js'

setupProgram(program)
program.action(createApp)
program.parse()
