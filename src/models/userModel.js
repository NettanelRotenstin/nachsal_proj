const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    user_name: { type: String, required: [true, 'user name is requierd!'], minlength: [5, 'too short name!'] },
    password: { type: String, require: [true, 'password is necesery!'] },
    role: { type: String, enum: ['soldier', 'commander'], default: 'soldier' },
    area: { type: String, enum: ['north', 'center', 'south', 'east', 'west'], required: [true, 'area is missing'] },
    units: { type: [Number], required: [true, 'unit is missing!'] }
})

const userModel = mongoose.model('user', userSchema)

module.exports = { userModel, userSchema }