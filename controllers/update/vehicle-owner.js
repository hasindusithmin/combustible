

const vehicleOwnerModel = require("../../models/vehicle-owner")

module.exports =  async function vehicle_handler(req, res) {
    try {
        const {ID,EMAIL, CONTACT,FIRSTNAME, LASTNAME, VEHICLE,FUEL}= req.body;
        let QTY = (VEHICLE === 'BIKE') ? 4 : (VEHICLE === '3WHEEL') ? 5 : 20
        const user = await vehicleOwnerModel.findByIdAndUpdate(ID,{$set:{EMAIL,CONTACT,FIRSTNAME, LASTNAME,VEHICLE,FUEL,QTY}})
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ ERROR: error.message })
    }
}