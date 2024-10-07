const { compare } = require("bcrypt")
const { userModel } = require("../models/usermodel")
const jwt = require('jsonwebtoken')

const login = async (user) => {
    try {
        const dbUser = await userModel.findOne({ user_name: user.user_name })
        if (!dbUser) {
            throw new Error('user nut found')
        }

        if (!await compare(user.password, dbUser.password)) {
            throw new Error('password invalid!')
        }

        const token = await jwt.sign({ user_name: dbUser.user_name, role: dbUser.role }, process.env.SECRET_KEY, { expiresIn: "3m" })
        return token
    } catch (error) {
        throw error
    }
}

module.exports = {
    login
}