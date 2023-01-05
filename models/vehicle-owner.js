
const mongoose = require('mongoose')
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const VehicleOwnerSchema = new Schema({
    PROVINCE: { type: String, required: true },
    DISTRICT: { type: String, required: true },
    LOCATION: { type: String, required: true },
    FIRSTNAME: { type: String, required: true },
    LASTNAME: { type: String, required: true },
    EMAIL: { type: String, required: true, unique: true },
    CONTACT: { type: String, required: true, unique: true },
    VEHICLE: { type: String, enum: ['BIKE', '3WHEEL', 'CAR', 'VAN', 'LORRY', 'LAND VEHICLE'], required: true },
    FUEL: { type: String, enum: ['DIESEL', 'PETROL'], required: true },
    QTY: { type: Number, required: true },
    QUEUE: { type: String },
    PASSWORD: { type: String, required: true }
})

VehicleOwnerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.PASSWORD = await bcrypt.hash(this.PASSWORD, salt)
    next()
})

VehicleOwnerSchema.statics.login = async function (EMAIL, PASSWORD) {
    const USER = await this.findOne({ EMAIL })
    if (USER) {
        const AUTH = await bcrypt.compare(PASSWORD, USER['PASSWORD']);
        if (AUTH) return USER;
        throw Error("INCORRECT password");
    }
    throw Error("INCORRECT email");
}

module.exports = mongoose.models.vehicleowner || mongoose.model('vehicleowner', VehicleOwnerSchema);