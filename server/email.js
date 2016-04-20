'use strict';

const nodemailer = require('nodemailer');
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}

const transporter = nodemailer.createTransport(smtpConfig);

module.exports.sendContact = (name, email, message, cb) => {
  const mailOpts = {
    from: process.env.CONTACT_EMAIL || 'contact@getquorum.com',
    to: process.env.CONTACT_EMAIL || 'contact@getquorum.com',
    replyTo: `"${name}" <${email}>`,
    subject: `GetQuorum.com contact request from ${name}" <${email}>`,
    text: `Got a message from the GetQuorum.com contact us page: \n\n ${message}`
  };

  transporter.sendMail(mailOpts, (err, info) => {
    console.error(err);
    cb(err, info);
  });

};
