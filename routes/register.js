//Register_routing
const express = require('express');
const nodemailer = require('nodemailer');



//express_init
const router = express.Router();


//routing
router.get('/register', (req, res) => {
  res.render('register.ejs');
});
router.post('/register', (req, res) =>{

    //create a transport
    const transport = nodemailer.createTransport({

    host : 'smtp.gmail.com',
    port : 587,
    auth : {
             user : 'minhajallsocial@gmail.com',
             pass : 'nsyifuzhmaxvscna'
           }

    })

   //sendmail
    transport.sendMail({
      from : 'Codiniger',
      to : req.body.email,
      subject : 'account confirmation',
      text : `Hi ${req.body.name} welcome to codiniger.com. Your number is ${req.body.number}.`
    })

})


//module_exports
module.exports = router;