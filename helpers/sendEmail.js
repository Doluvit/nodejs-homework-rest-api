const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
require("dotenv").config();
const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});
const sendEmail = (data) => {
  mg.messages
    .create(MAILGUN_DOMAIN, { ...data, from: "<doluvit@gmail.com>" })
    .then((msg) => console.log("Email send success", msg))
    .catch((err) => console.log("Email send fail", err));
};

module.exports = sendEmail;
