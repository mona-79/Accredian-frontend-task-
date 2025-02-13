// nodemailer.js
const nodemailer = require('nodemailer');

// Create a transporter using Gmail's SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail's email service
  auth: {
    user: process.env.EMAIL,  // Your own email for sending (use environment variable)
    pass: process.env.EMAIL_PASSWORD // Your email password (use environment variable)
  }
});

// Function to send email
const sendReferralEmail = async (referralData) => {
  const { referrerEmail, refereeName, courseName } = referralData;

  // Mail options
  const mailOptions = {
    from: process.env.EMAIL, // Your email (sender's email)
    to: referrerEmail, // Referrer's email (this will be the receiver's email)
    subject: `Referral for ${courseName} - ${refereeName}`, // Email subject
    text: `Hello! You have successfully referred ${refereeName} for the course: ${courseName}.`, // Email body
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email: ', error);
  }
};

module.exports = { sendReferralEmail };
