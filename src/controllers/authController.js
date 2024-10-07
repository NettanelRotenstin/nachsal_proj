const { login: loginService } = require("../services/authService")
const login = async (req, res) => {
    try {
        const token = await loginService(req.body)
        res.cookie("token", token)
        res.json({
            msg:`welcome ${req.body.user_name} you have a token for 3 minutes`
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const logout = async (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = {
    login,
    logout
}