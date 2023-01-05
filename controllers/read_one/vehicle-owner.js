


const vehicleOwnerModel = require("../../models/vehicle-owner")

module.exports = async function vehicle_handler(req,res) {
    try {
        const {id} = req.query;
        const user = await vehicleOwnerModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}