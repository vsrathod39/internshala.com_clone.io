const transporter = require("../configs/mail");

module.exports = (from, to, subject, html) => {
    const message = {
        from,//: "vsrathod39@outlook.com",
        to,//: "vsrathod39@gmail.com",
        subject,//: `${req.body.name} is sucessfully created`,
        text: `Successfuly logedin`,
        html//: `<h2>Successfuly set price = </h2> ${req.body.price}` 
      };
    
    transporter.sendMail(message);
}