const mongoose = require('mongoose')

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/green_eye')
    } catch (error) {
        console.log(error)
    }
}


module.exports = { connectToMongo }