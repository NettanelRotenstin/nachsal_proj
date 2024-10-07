const { createUser } = require("../services/userService")

const register = async (req, res) => {
    try {
        await createUser(req.body)
        res.status(201).json({
            msg: 'user created succesfully!'
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProfile = async (req, res) => {
    try {

    } catch (error) {

    }
}

const setSettings = async (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = {
    getProfile,
    register,
    setSettings
}