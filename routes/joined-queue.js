



const { Router } = require('express')
const StationOwnerModel = require("../models/station-owner")
const VehicleOwnerModel = require("../models/vehicle-owner")
const fetch = require("node-fetch")

const joinRoute = Router()

joinRoute.post('/', async(req, res) => {
    try {
        const { id } = req.query;
        if (id === undefined) throw Error("id (query) is required.")
        const { USERNAME, VEHICLE, FUEL, QTY, USER_ID, QUEUE } = req.body;
        if (QUEUE !== "") {
            const DOMAIN = (process.env.ENVIROMENT === 'production') ? 'https://combustible.deta.dev/' : 'http://127.0.0.1:3000'
            await fetch(`${DOMAIN}/exits/before`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, username: USERNAME, })
            })
        }
        const user = await StationOwnerModel.findOne({ _id: id })
        const current = user['QUEUE'].map(({ USERNAME }) => USERNAME)
        if (current.includes(USERNAME)) throw Error('already exists')
        user['QUEUE'].push({ USERNAME, VEHICLE, FUEL, QTY })
        await StationOwnerModel.updateOne({ _id: id }, { $set: { QUEUE: user['QUEUE'] } })
        await VehicleOwnerModel.updateOne({_id:USER_ID}, { $set: { QUEUE: id } })
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ ERROR: error.message })
    }
}) 