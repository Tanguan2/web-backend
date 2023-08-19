const router = require("express").Router()

const message = require("./message")

const author = require("./author")

router.use("/message", message) // http://(localhost:500/api/message
router.use("/author", author) // http://(localhost:500/api/author


module.exports = router