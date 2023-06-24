import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import createLogger from '../logger.js'
const logger = createLogger('file')

export default function createFile(fileName,templateName) {

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const templatePath = path.join(__dirname, `${templateName}`)
    const templateContent = fs.readFileSync(templatePath,'utf8')
    const filePath = path.join(process.cwd(), `${fileName}`)

    fs.writeFile(filePath, templateContent, 'utf8', (e)=> {
        if(e){
            logger.warning('Error creating file:',e)
        }else{
            logger.highlight('File generated')
        }
    })
}