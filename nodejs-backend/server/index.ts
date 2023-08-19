// code that runs the API web server

const express = require("express")

const path = require("path")

const bodyParser = require("body-parser")

const routing = require("./routing")

const middleware = require("./routing/middleware")

const app = express()

const PORT = 5000

app.use(express.static(path.join(__dirname, "../client")))

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", middleware, routing)

app.listen(PORT, () => {
    console.log(`Backend is listening on port: ${PORT}`)
})