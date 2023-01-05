
const { Router } = require('express')
const station_handler = require('../controllers/login/station-owner')
const vehicle_handler = require('../controllers/login/vehicle-owner')

const loginRoute = Router()

loginRoute.post('/station-owner', station_handler)

loginRoute.post('/vehicle-owner', vehicle_handler)

module.exports = loginRoute;
