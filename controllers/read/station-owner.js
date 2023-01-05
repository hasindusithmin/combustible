
const StationOwnerModel = require("../../models/station-owner")

module.exports =  async function station_handler(req,res) {
    try {
        const user = await StationOwnerModel.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}