import express from 'express'
import { readText } from './utils/fsUtils.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
    const id = req.params.id 
    const fileContent = await readText('server/data/data.json')
    const parsedObj = JSON.parse(fileContent)
    const puppyFound = parsedObj.puppies.find(puppy => puppy.id == id)
    res.render('details', puppyFound)
})



export default router