// code that runs the API web server

const express = require("express")

const path = require("path")

const bodyParser = require("body-parser")

const app = express()

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Backend is listening on port: ${PORT}`)
})