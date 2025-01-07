const asyncHandler = require("express-async-handler");
const ContactModel = require("../models/Contact.model");
const { sendEmail } = require("../utils/email");

exports.contactAdd = asyncHandler(async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }
        await sendEmail({
            to: email,
            subject: "welcome to my-portfolio",
            message: `
                        <h1> Welcome, ${req.body.name}</h1>
                        <h2>Thank you for joining my-portfolio website! We’re thrilled to have you as part of our community.</h2>
                    `
        })
        const result = await ContactModel.create({ name, email, message })

        res.json({ message: "contact send success", result })

    } catch (error) {
        return res.status(500).json({ message: "Error send contact", error: error.message });
    }
})