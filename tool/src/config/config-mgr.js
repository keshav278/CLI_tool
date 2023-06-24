
import {cosmiconfigSync} from 'cosmiconfig'
const configLoader = cosmiconfigSync('tool')
import schema from './schema.js'
import betterAjvErrors from 'better-ajv-errors'
import Ajv from 'ajv'
const ajv = new Ajv({jsonPointers: true})
import createLogger from '../logger.js'
const logger = createLogger('config-mgr')

export function getConfig() {
       
        const result = configLoader.search(process.cwd())
        if(!result){
            logger.warning('Could not find config, using default')
            return {port: 1234}
        }else{
            const isValid = ajv.validate(schema, result.config)
            if(!isValid){
                logger.warning('Invalid config was supplied')
                console.log()
                console.log(betterAjvErrors(schema,result.config,ajv.errors))
                process.exit(1)
            }
            console.log('Found config', result.config)
            return result.config
        }
}
