import chalk from 'chalk'
import createLogger from '../logger.js'
import createFile from './createFile.js'
const logger = createLogger('start')

export function start(config,args){
    logger.highlight(` Starting the app  `)
    logger.debug('Received configuration in start -',config)
    createFile(args._[0],args._[1])
}



