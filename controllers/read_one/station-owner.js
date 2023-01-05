

const StationOwnerModel = require("../../models/station-owner")

module.exports =  async function station_handler(req,res) {
    try {
        const {id} = req.query;
        const user = await StationOwnerModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}