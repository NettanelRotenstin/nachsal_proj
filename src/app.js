const exp = require('express')
const dotenv = require('dotenv')

const app = exp()
dotenv.config()
const port = process.env.PORT || 1415

app.use(exp.json())

app.use('/auth',require('./routers/authRouter'))
app.use('/user',require('./routers/userRoute'))
app.use('/greenEye',require('./routers/greenEyeRouter'))


app.listen(port,() => console.log(`server running on port ${port}`))

 