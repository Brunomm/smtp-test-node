"use strict";
const nodemailer = require("nodemailer");

const config = require ('./config')


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  console.log("O E-MAIL SERÁ ENVIADO SEGUINDO AS SEGUINTES CONFIGURAÇÕES:");
  console.log(config)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: config.host_smtp,
    port: config.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.login_user,
      pass: config.login_pwd,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from:    config.mail_from, // sender address
    to:      config.mail_to, // list of receivers
    subject: "Hello SMTP ✔", // Subject line
    text:    "Wow, it's works!", // plain text body
    html:    "<b>Wow, it's works!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  console.info("E-MAIL ENVIADO. VERIFIQUE A CAIXA DE E-MAIL <%s>", config.mail_to)
}

main().catch(console.error);
