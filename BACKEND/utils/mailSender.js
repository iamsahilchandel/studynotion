const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.MAIL_USER, // sender address
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`, // plain text body
    });

    return info;
  } catch (error) {
    console.log("Error in mailSender", error);
  }
};

module.exports = mailSender;
