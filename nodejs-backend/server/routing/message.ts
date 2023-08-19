const create = require("./message/create")

const edit = require("./message/edit")

const view = require("./message/")

const routerX = require("express").Router()

routerX.post("/create", create) // POST - https://localhost:5000/api/message/create
routerX.put("/:id", edit) // PUT - https://localhost:5000/api/message/yourIDHere
routerX.delete("/:id", edit) // DELETE
routerX.get("/:id", view) // GET https://localhost:5000/api/message/yourIDHere
routerX.get("/", view) // GET https://localhost:5000/api/message/

module.exports = routerX