#!/usr/bin/env node
import arg from 'arg'
import chalk from 'chalk'
import {getConfig} from '../src/config/config-mgr.js'
import {start} from '../src/commands/start.js'
import createLogger from '../src/logger.js'
const logger = createLogger('bin/index')
function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start filename templatename')}\tCreates file with template in current directory
    ${chalk.greenBright('--build')}\tBuilds the app`)
}
try{
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    logger.debug('Received args', args)
    if(args['--start']){
        const config = getConfig()
        start(config,args)
    }
}catch(e){
    logger.warning(e.message)
    console.log()
    usage()
}


