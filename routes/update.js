

const { Router } = require('express')
const station_handler = require('../controllers/update/station-owner')
const vehicle_handler = require('../controllers/update/vehicle-owner')

const UpdateRoute = Router()

UpdateRoute.post('/station-owner', station_handler)

UpdateRoute.post('/vehicle-owner', vehicle_handler)

module.exports = UpdateRoute;
