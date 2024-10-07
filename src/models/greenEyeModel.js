const mongoose = require('mongoose')

const populationSchema = new mongoose.Schema({
    areas:[String],
    units:[Number]
})

const greenEyeSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    length: { type: Number, default: 3 },
    replyes: { type: [mongoose.Schema.Types.ObjectId], ref: 'user' },
    population:populationSchema
})

const greenEyeModel = mongoose.model('greenEye', greenEyeSchema)

module.exports = greenEyeModel





























