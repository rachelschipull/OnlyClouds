const express = require("express")
const app = express()

const admin = require('firebase-admin')
const credentials = require('./key.json')

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.post('/create', async)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})