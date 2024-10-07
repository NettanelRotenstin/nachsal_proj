const jwt = require('jsonwebtoken')
const onlyCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token

        const userData = await jwt.verify(token,process.env.SECRET_KEY)
        if(userData.role != "commander")
        {
            res.status(403).send('cha cha cha , you are not a commander 😜')
        }
        req.user = userData

        next()
    } catch (error) {

    }
}

const SoldiersAndCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token

        const userData = await jwt.verify(token,process.env.SECRET_KEY)

        req.user = userData

        next()
    } catch (error) {
        console.log(error)
        res.status(401).send(error.message)
    }
}

module.exports = {
    onlyCommanders,
    SoldiersAndCommanders
}