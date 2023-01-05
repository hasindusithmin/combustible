

const { Router } = require('express')
const station_handler = require('../controllers/signup/station-owner')
const vehicle_handler = require('../controllers/signup/vehicle-owner')

const signupRoute = Router()

signupRoute.post('/station-owner', station_handler)

signupRoute.post('/vehicle-owner', vehicle_handler)

module.exports = signupRoute;
