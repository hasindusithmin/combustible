
const jwt = require("jsonwebtoken");
const StationOwnerModel = require("../../models/station-owner")

module.exports = async function station_handler(req,res){

    try {
        const {
            DEALER,
            EMAIL,
            CONTACT,
            PROVINCE,
            DISTRICT,
            LOCATION,
            ARRIVALTIME,
            FINISHTIME,
            DIESEL,
            PETROL,
            PASSWORD,
            QUEUE
        } = req.body;
        const user = await StationOwnerModel.create({DEALER,EMAIL,CONTACT,PROVINCE,DISTRICT,LOCATION,ARRIVALTIME,FINISHTIME,DIESEL,PETROL,PASSWORD,QUEUE})
        const tkn = jwt.sign({user,role:'station'},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('JWT',tkn,{maxAge:3600 * 1000})
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ERROR:error.message})
    }
}
