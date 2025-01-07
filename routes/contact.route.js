const { contactAdd } = require("../controller/contact.controller")
const { customerProtected } = require("../middlewares/protected.middleware")

const router = require("express").Router()

router
    .post("/sendmessage", contactAdd)

module.exports = router