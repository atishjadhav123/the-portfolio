const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const cookieparser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieparser())


app.use("/api/auth", require("./routes/auth.route"))
app.use("/api/contact", require("./routes/contact.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: `route not found${req.method}:${req.url}` })
})
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})

