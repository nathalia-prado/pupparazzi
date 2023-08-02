import * as Path from 'node:path'
// import * as URL from 'node:url'

import express, { Router } from 'express'
import hbs from 'express-handlebars'
import * as fsPromises from 'node:fs/promises'


const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here

server.get('/', async (req, res) => {
    const fileContent = await readText('server/data/data.json')
    const puppies = JSON.parse(fileContent)
    res.render('home', puppies)
})

export async function readText(pathToFile) {
    try {
        return fsPromises.readFile(pathToFile, 'utf-8')
    } catch(e) {
        console.error(e.message)
    }    
}

export default server
