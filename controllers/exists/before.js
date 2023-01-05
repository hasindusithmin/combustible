


const StationOwnerModel = require("../../models/station-owner")
const VehicleOwnerModel = require("../../models/vehicle-owner")

module.exports =  async function before_handler(req,res) {
    try {
        const {id,username,user_id} = req.body;
        if (id === undefined) throw Error("id (query) is required.")
        const station = await StationOwnerModel.findOne({_id:id})
        const queue = station['QUEUE'].filter(({USERNAME})=>USERNAME !== username)
        await StationOwnerModel.updateOne({_id:id},{$set:{QUEUE:queue}})
        await VehicleOwnerModel.updateOne({_id:user_id},{$set:{QUEUE:""}})
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}