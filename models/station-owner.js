
const mongoose  = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const VehicleSchema = new Schema({
    USERNAME: { type: String },
    VEHICLE: { type: String, enum: ['BIKE', '3WHEEL', 'CAR', 'VAN', 'LORRY', 'LAND VEHICLE'] },
    FUEL: { type: String },
    QTY: { type: Number }
})

const StationOwnerSchema = new Schema({
    DEALER: { type: String, required: true },
    EMAIL: { type: String, required: true ,unique:true},
    CONTACT: { type: String, required: true ,unique:true},
    PROVINCE: { type: String, required: true },
    DISTRICT: { type: String, required: true },
    LOCATION: { type: String, required: true },
    ARRIVALTIME: { type: String },
    FINISHTIME: { type: String },
    DIESEL: { type: Number, required: true },
    PETROL: { type: Number, required: true },
    PASSWORD: { type: String, required: true },
    QUEUE: [VehicleSchema],
})

StationOwnerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.PASSWORD = await bcrypt.hash(this.PASSWORD, salt)
    next()
})

StationOwnerSchema.statics.login = async function (EMAIL,PASSWORD) {
    const USER = await this.findOne({EMAIL})
    if (USER) {
        const AUTH = await bcrypt.compare(PASSWORD,USER['PASSWORD'])
        if (AUTH) return USER;
        throw Error('INCORRECT password'); 
    }
    throw Error('INCORRECT email');
}


module.exports = mongoose.models.stationowner || mongoose.model('stationowner',StationOwnerSchema);