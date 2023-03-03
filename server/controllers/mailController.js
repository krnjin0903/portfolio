const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
  });

  const { name, email, message } = req.body;

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Portfolio - Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mail, (error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json({ mail });
    }
  });
};

module.exports = { sendMail };
