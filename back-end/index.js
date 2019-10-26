//======================================= SETUP SERVER ===========================================================\\

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const bearerToken = require('express-bearer-token')
// const { sqlDB } = require('./express-sql/database')

const app = express()
const port = process.env.PORT || 1994

app.use(bodyParser.json())
app.use(cors())
app.use(bearerToken())
app.use(express.static('public'))

const {productRouter, userRouter, subscriptionRouter, cartRouter} = require('./express-sql/router')

app.use('/product', productRouter)
app.use(productRouter)
app.use('/user', userRouter)
app.use('/subscription', subscriptionRouter)
app.use('/user', cartRouter)

// app.get('/promo', (req,res) => {
//     var sql =  `SELECT * FROM promo p 
//                                 join brewer b
//                                 on b.id = p.id_product_promo`

//     sqlDB.query(sql, (err,result) => {
//         if(err) return res.status(500).send({ message : 'Select from database error', err })

//         res.status(200).send(result)
//     })
// })


//=================================== RUNNING SERVER ===========================================================\\

app.listen(port, ()=> console.log(`Api Aktif di port ${port}`))