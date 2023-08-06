import * as fsPromises from 'node:fs/promises'
import * as Path from 'node:path'


const filepathToDataJson = Path.resolve('./server/data/data.json')

export async function readText() {
    try {        
        const fileContent = await fsPromises.readFile(filepathToDataJson, 'utf-8')
        const puppies = JSON.parse(fileContent)
        return puppies
    } catch(e) {
        console.error(e.message)
    }    
}

export function writeText(contentToWrite) {
    try {
        return fsPromises.writeFile(filepathToDataJson, contentToWrite)
    } catch(e) {
        console.error(e.message)
    }
}