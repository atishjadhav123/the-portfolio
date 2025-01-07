const asyncHandler = require("express-async-handler")
const { checkEmpty } = require("../utils/checkEmpty")
const validator = require("validator")
const AuthModel = require("../models/Auth.model")
const bcrypt = require("bcryptjs")
const { sendEmail } = require("../utils/email")
const jwt = require("jsonwebtoken")


exports.registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body
        const { isError, error } = checkEmpty({ name, email, password })
        if (isError) {
            return res.status(400).json({ message: "all feild are required", error })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "invali email" })
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ message: "provide String password" })
        }
        if (mobile && !validator.isMobilePhone(mobile, "en-IN")) {
            return res.status(400).json({ message: "invalid mobile number" })
        }
        const isFound = await AuthModel.findOne({ email, mobile })
        if (isFound) {
            return res.status(400).json({ message: "email and mobile alredy registered" })
        }
        const hashPass = await bcrypt.hash(password, 10)
        await AuthModel.create({ name, email, password: hashPass, mobile })
        await sendEmail({
            to: email,
            subject: "welcome to my-portfolio",
            message: `
                <h1> Welcome, ${req.body.name}</h1>
                <h2>Thank you for joining my-portfolio website! We’re thrilled to have you as part of our community. Our goal is to provide best price.</h2>
            `
        })
        res.json({ message: "user register success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to register user" })
    }
})
exports.loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const { isError, error } = checkEmpty({ username, password })
    if (isError) {
        return res.status(400).json({ message: "All Fields Required" })
    }
    try {
        const isFound = await AuthModel.findOne({ $or: [{ email: username }, { mobile: username }] })
        if (!isFound) {
            return res.status(400).json({ message: "User Email Or Mobile Not Found" })
        }
        const isVerify = await bcrypt.compare(password, isFound.password)
        if (!isVerify) {
            return res.status(400).json({ message: "Password Do Not MAtch" })
        }
        const token = jwt.sign({ userId: isFound._id }, process.env.JWT_KEY, { expiresIn: "15d" })
        res.cookie("user", token, {
            maxAge: 100 * 60 * 60 * 24 * 15,
            httpOnly: true
        })
        res.json({
            message: "Creadential Verify Success",
            result: {
                _id: isFound._id,
                name: isFound.name,
                email: isFound.email,
                mobile: isFound.mobile,
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Intervel Server Error" })
    }
})
exports.logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("user")
    res.json({ message: "user logout succcess" })
})
