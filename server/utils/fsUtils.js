import * as fsPromises from 'node:fs/promises'
import * as Path from 'node:path'


const filepathToDataJson = Path.resolve('./server/data/data.json')

export async function readText() {
    try {
        return fsPromises.readFile(filepathToDataJson, 'utf-8')
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