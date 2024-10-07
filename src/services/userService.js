const bcrypt = require('bcrypt')
const { userModel } = require('../models/usermodel')
const createUser = async (user) => {
    try {
        const { user_name, password, role, area, units } = user
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbUser = new userModel({
            user_name, password: hashedPassword, role, area, units
        })
        await dbUser.save()
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser
}