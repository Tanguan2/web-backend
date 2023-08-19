const { JsonDB } = require("node-json-db")

var db = new JsonDB("./database.json")

module.exports = db