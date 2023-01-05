
const { Router } = require('express')
const after_handler = require('../controllers/exists/after')
const before_handler = require('../controllers/exists/before')


const existsRoute = Router()

existsRoute.post('/after', after_handler)

existsRoute.post('/before', before_handler)

module.exports = existsRoute;