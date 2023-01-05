


const jwt = require("jsonwebtoken");
const vehicleOwnerModel = require("../../models/vehicle-owner")

module.exports =  async function vehicle_handler(req,res) {
    try {
        const {EMAIL,PASSWORD} = req.body;
        const user  = await vehicleOwnerModel.login(EMAIL,PASSWORD)
        const tkn = jwt.sign({user,role:'vehicle'},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('JWT',tkn,{maxAge:3600 * 1000})
        res.status(200).json({EMAIL,PASSWORD})
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}