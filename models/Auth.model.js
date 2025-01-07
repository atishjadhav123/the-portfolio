const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    photo: { type: String },
}, {})

module.exports = mongoose.model("user", userSchema)
