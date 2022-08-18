const express = require("express")
const app = express()
const env = require('dotenv')
env.config()
const cors = require('cors')
const PORT = process.env.PORT || 8000
const DB = require('./config/config.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const homeRoute = require('.routes/home.js')
const cloudRoute = require('./routes/clouds.js')

app.use('/', homeRoute)
app.use('/api/clouds/', cloudRoute)

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})