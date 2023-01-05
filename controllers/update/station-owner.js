
const jwt = require("jsonwebtoken");
const StationOwnerModel = require("../../models/station-owner")

export default async function station_handler(req,res) {
    try {
        const {ID,EMAIL, CONTACT, ARRIVALTIME, FINISHTIME, DIESEL, PETROL} = req.body;
        const user = await StationOwnerModel.findByIdAndUpdate(ID,{$set:{EMAIL, CONTACT, ARRIVALTIME, FINISHTIME, DIESEL, PETROL}})
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}