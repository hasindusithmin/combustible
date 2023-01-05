
const jwt = require("jsonwebtoken");
const vehicleOwnerModel = require("../../models/vehicle-owner")

module.exports =  async function vehicle_handler(req, res) {
    try {
        const {
            PROVINCE,
            DISTRICT,
            LOCATION,
            FIRSTNAME,
            LASTNAME,
            EMAIL,
            CONTACT,
            VEHICLE,
            FUEL,
            PASSWORD
        } = req.body;
        let QTY = (VEHICLE === 'BIKE') ? 4 : (VEHICLE === '3WHEEL') ? 5 : 20
        const QUEUE = ""
        const user = await vehicleOwnerModel.create({PROVINCE,DISTRICT,LOCATION,FIRSTNAME,LASTNAME,EMAIL,CONTACT,VEHICLE,FUEL,QTY,QUEUE,PASSWORD})
        const tkn = jwt.sign({user,role:'vehicle'},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('JWT',tkn,{maxAge:3600 * 1000})
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ ERROR: error.message })
    }
}