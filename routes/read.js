

const { Router } = require('express')
const station_handler = require('../controllers/read/station-owner')
const vehicle_handler = require('../controllers/read/vehicle-owner')

const readRoute = Router()

readRoute.get('/station-owner', station_handler)

readRoute.get('/vehicle-owner', vehicle_handler)

module.exports = readRoute;