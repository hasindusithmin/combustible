

const { Router } = require('express')
const station_handler = require('../controllers/read_one/station-owner')
const vehicle_handler = require('../controllers/read_one/vehicle-owner')

const readOneRoute = Router()

readOneRoute.get('/station-owner', station_handler)

readOneRoute.get('/vehicle-owner', vehicle_handler)

module.exports = readOneRoute;