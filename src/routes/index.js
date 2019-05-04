import components from '../modules/components'
import settings from '../modules/settings'
import filterSettings from '../modules/touchtunes'
import express from 'express'
import path from 'path'
const router = express.Router()

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'))
})

router.get('/components', function (req, res) {
	res.send(components)
})

router.get('/settings', function (req, res) {
	res.send(settings)
})

router.get('/filter', function (req, res) {
	res.send(filterSettings(components, settings))
})

export default router
