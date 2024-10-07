const jwt = require('jsonwebtoken')
const onlyCommanders = async (req, res, next) => {
    try {
        
        const token = req.cookies.token;
        
        const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
        
        if (userData.role != "commander") {
            
            res.status(403).send("shtzchhhhhhhhh.....");
        }
        
        req.user = userData;
        next();
    } 
    catch (err)
     { 
        res.send(`catch in only commanderes`)
    }
};

const SoldiersAndCommanders = async (req, res, next) => {
    try {
        const token = req.cookies.token

        const userData = await jwt.verify(token, process.env.SECRET_KEY)

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