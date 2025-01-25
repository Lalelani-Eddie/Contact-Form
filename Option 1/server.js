const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., 'gmail', 'yahoo', etc.)
    auth: {
        user: 'lalelaninene@gmail.com', // Replace with your email
        pass: '', // Replace with your email password or app-specific password
    },
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
    const { fullName, contact, company, email, projectDetails } = req.body;

    const mailOptions = {
        from: email, // Sender address
        to: 'lalelaninene@gmail.com', // Replace with your email
        subject: 'New Contact Form Submission',
        text: `
            Name: ${fullName}
            Contact: ${contact}
            Company: ${company}
            Email: ${email}
            Message: ${projectDetails}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});