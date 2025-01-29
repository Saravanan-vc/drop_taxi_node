const express = require('express');
const nodemailer = require('nodemailer');
const mailoptions = require("./mail/send_details");
require('dotenv').config();
const bodyParser = require('body-parser');
const host = express();
const router = express.Router();


host.use(bodyParser.json());



router.post("/neworder", (req, res) => {
    const { time, date, name, number, amount, km, from, to} = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.TRANSPORT_HOST,
            port: process.env.HOST_PORT,
            secure: false,
            auth: {
                user: process.env.AUTH_USER,
                pass: process.env.AUTH_PASS,
            },        
        });
        const options = mailoptions(time, date, name, number, amount, km, from, to)
        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(`Error sending email: ${error}`);
                res.status(400).json({ success: "bad", error: error.message });
            } else {
                console.log(`Email sent successfully: ${info.response}`);
                res.status(200).json({ success: "good", info: info.response });
            }
        });
        res.status(200).json({ "success": "gud" });
    } catch (error) {
        res.status(400).json({ "success": "bad" });
    }

});

host.use(router);

host.listen(8000, () => console.log('http://localhost:8000/neworder'));

