import * as fsPromises from 'node:fs/promises'

export async function readText(pathToFile) {
    try {
        return fsPromises.readFile(pathToFile, 'utf-8')
    } catch(e) {
        console.error(e.message)
    }    
}