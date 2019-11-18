const { sqlDB } = require('../database');
const { transporter } = require('../helpers/mailer');
const crypto = require('crypto');
const {createJWTToken} = require('../helpers/jwt')
const secret = 'onepiece'

module.exports = {

    register : (req,res) => {
       
        req.body.role = 'user'
        req.body.status = 'Unverified'
        req.body.tanggalBergabung = new Date()

        //================== ENKRIP ==============\\
        req.body.password = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex');

        //=============== CHECK EMAIL ============\\

        var sql = `SELECT * FROM users WHERE email = '${req.body.email}'`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database Error', err})

            if(result.length > 0){
                return res.status(500).send({ message : 'Email has been taken', error : true })
            }
        //==========================================\\

        sql = `INSERT INTO users SET ?`;
        
        sqlDB.query(sql, req.body, (err1, result1) => {
            // console.log(req.body)
            if(err) return res.status(500).send({ message : 'Insert ke Database Gagal', err1})

            var token = createJWTToken({ email: req.body.email })
            
            var mailOptions = {
                from    : 'CrazyCoffee <sipelott@gmail.com>',
                to      : req.body.email,
                subject : 'Email Confirmation',
                html    : `Verified Your Email by Click This Link
                            <a href="http://localhost:3000/emailverified?token=${token}">Verified</a>`
            }

            transporter.sendMail(mailOptions, (err2,result2) => {
                if(err) return res.status(500).send({ message : 'Kirim Email Gagal', err2, error : false, email : req.body.email })

                res.status(200).send({ status : 'Send Email Success' , result : result2 , email : req.body.email })
            })
        })

        })
    },

    resendEmail : (req,res) => {

        var mailOptions = {
            from    : 'CrazyCoffee <sipelott@gmail.com>',
            to      : req.body.email,
            subject : 'Email Confirmation',
            html    : `Verified Your Email by Click This Link
                        <a href="http://localhost:3000/emailverified?email=${req.body.email}">Verified</a>`
        }

        transporter.sendMail(mailOptions, (err,result) => {
            if(err) return res.status(500).send({ message : 'Kirim Email Confirmasi Gagal', err})

            res.status(200).send({ message : 'Kirim Email Berhasil', result})
        })
    },

    confirmEmail : (req,res) => {

        var sql = `UPDATE users SET status='Verified' WHERE email='${req.email}';`;
    
        sqlDB.query(sql, (err,result)=>{
            if(err) return res.status(500).send({status : 'error', err})
    
            sql = `SELECT id,username,email,status from users WHERE email='${req.email}';`;
    
            sqlDB.query(sql, (err2, result1)=>{
                if(err2) return res.status(500).send({status : 'error', err2})
    
                var token = createJWTToken({...result1[0]})
    
                res.status(200).send({...result1[0], token })
            })
        })
    },


    login : (req,res) => {

        var { email, password } = req.body
        //=========ENKRIP==============\\
        password = crypto.createHmac('sha256', secret).update(password).digest('hex');

        var sql = `SELECT id, username , email, status FROM users WHERE email=${sqlDB.escape(email)} AND password=${sqlDB.escape(password)}`;

        sqlDB.query(sql, (err, result)=>{
            if(err) return res.status(500).send({message : 'Select user by email adn password from Database error', err})

            //proteksi 
            if(result.length === 0){
                return res.status(500).send({message : 'Email or Password Incorect'})
            }

            var token = createJWTToken({id: result[0].id, username: result[0].username })

        // console.log(result)
        // console.log(token)
            res.status(200).send({id: result[0].id, username: result[0].username, email: result[0].email, status: result[0].status, token })
            
    })
    },

    keepLogin: (req,res) => {
        // console.log(req)
        // console.log(req)
        var sql = `SELECT role FROM users where id = ${req.user.id};`;
        
        sqlDB.query(sql,(err,result) => {
            if(err) return res.status(500).send({ message : 'Select from db error', err})
            
            // console.log(result)
            res.status(200).send({ ...req.user, role : result[0].role, token: req.token })
        })

        
    }
}