// functions/submit-interest.js

const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
    const { interest, name, email } = JSON.parse(event.body);

    // Send email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'teamcrustplay.mohit@gmail.com', // Replace with your email address
            pass: 'Crustplay.com', // Replace with your email password
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'teamcrustplay.mohit@gmail.com', // Replace with your email address
        subject: 'New Interest Submission',
        text: `Level of Interest: ${interest}\nName: ${name}\nEmail: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false }),
        };
    }
};
