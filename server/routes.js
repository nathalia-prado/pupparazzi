import express from 'express'
import { readText, writeText } from './utils/fsUtils.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
    const id = req.params.id 
    const fileContent = await readText('server/data/data.json')
    const parsedObj = JSON.parse(fileContent)
    const puppyFound = parsedObj.puppies.find(puppy => puppy.id == id)
    res.render('details', puppyFound)
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id 
    const fileContent = await readText('server/data/data.json')
    const parsedObj = JSON.parse(fileContent)
    const puppyFound = parsedObj.puppies.find(puppy => puppy.id == id)
    res.render('edit', puppyFound)
})

router.post('/:id/edit', async (req, res) => {
    const id = req.params.id 
    const fileContent = await readText('server/data/data.json')
    const parsedObj = JSON.parse(fileContent)
    const puppyFound = parsedObj.puppies.find(puppy => puppy.id == id)
    puppyFound.name = req.body.name
    puppyFound.breed = req.body.breed 
    puppyFound.owner = req.body.owner 
    puppyFound.image = req.body.image 
    await writeText('server/data/data.json', JSON.stringify(parsedObj))
    res.render('edit', puppyFound)

    res.redirect('/puppies/' + id)
})

export default router