const exp = require('express')
const dotenv = require('dotenv')
const { connectToMongo } = require('./config/dbConfig')
const cookieParser = require('cookie-parser')

const app = exp()

dotenv.config()

connectToMongo()

const port = process.env.PORT || 1415

app.use(exp.json())

app.use(cookieParser())

app.use('/auth', require('./routers/authRouter'))
app.use('/user', require('./routers/userRoute'))
app.use('/greenEye', require('./routers/greenEyeRouter'))


app.listen(port, () => console.log(`server running on port ${port}`))

