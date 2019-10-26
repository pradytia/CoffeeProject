const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service :  'gmail',
    auth : {
        user    : 'sipelott@gmail.com',
        pass    : 'tjllhhbkxbwkbphk'
    },
    tls : {
        rejectUnauthorized : false
    }
})

module.exports = {
    transporter
};