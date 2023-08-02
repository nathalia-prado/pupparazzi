import * as Path from 'node:path'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'
import routes from './routes.js'
import { readText } from './utils/fsUtils.js'


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

server.use('/puppies', routes)



export default server
