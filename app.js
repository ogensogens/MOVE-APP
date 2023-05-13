const express= require('express')
const mongoose = require('mongoose')
require('dotenv').config() 
const app = express()

const {UserRouter} = require('./routes/user-routes')
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err.message)
})
// Middleware
app.use(express.json())
app.use('/api/v1', UserRouter)
const PORT = +(process.env.PORT) || 5100


app.listen(PORT, ()=>{
    console.log(`This server listening on port ${PORT}`)
})

