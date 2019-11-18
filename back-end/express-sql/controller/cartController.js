const { sqlDB } = require('../database');
const moment = require('moment');
const { uploader } = require('../helpers/uploader');

module.exports = {

    getCartId : (req,res) => {

        var sql = `SELECT   c.id as id,
                            quantity as quantity,
                            id_user as id_user,
                            p.id as id_product,
                            nama as nama, 
                            idJenis as idJenis,
                            harga as harga,
                            discount as discount,
                            deskripsi as deskripsi,
                            pathImg as pathImg
                            from cart c
                            JOIN products p
                            ON p.id = c.id_product
                            WHERE id_user = ${sqlDB.escape(req.params.id)}`;
                            // ${sqlDB.escape(req.body.id_user)}

        sqlDB.query(sql, (err,result)=>{
            if(err) return res.status(500).send({ message : 'Select Database Error', err })

            res.status(200).send(result)
            // console.log(result)
        })
    },

    getCart : (req, res) => {

        var id_user = req.query.id_user || ''
        var id_product = req.query.id_product || ''

        var sql = `SELECT * from cart WHERE id_user LIKE '%${id_user}%' AND id_product LIKE '%${id_product}%'`

        
        sqlDB.query(sql,(err,result) => {
            if(err) return res.status(500).send({ message : 'Get Database by Query Error', err })

            res.status(200).send(result)
        })

    },

    getCartWithoutJoin : (req,res) => {
        var sql = `SELECT * FROM cart WHERE id_user = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql,(err,result) => {
            if(err) return res.status(500).send({ message : 'Get Database Error', err })

            res.status(200).send(result)
        })

    },

    addTocart : (req,res) => {
        var sql = `INSERT INTO cart SET ?`;

        // console.log(req.body)
        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'Insert Database Error', err })

            res.status(200).send({ message: 'Insert Database berhasil', result})
        })
    },

    editCart :  (req,res) => {
        var sql = `UPDATE cart SET ? WHERE id = ${sqlDB.escape(req.params.id)}`;

        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'UPDATE Database Error', err })

            res.status(200).send(result)
        })
    },

    deleteCart : (req,res) => {

        var sql = `DELETE from cart where id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'DELETE Database Error', err })

            res.status(200).send(result)
        })

    },

    getDataCustomer : (req,res) => {
    
           var sql = `SELECT *  FROM data_customer WHERE id_user = ${sqlDB.escape(req.params.id)} `;
    
           sqlDB.query(sql, (err,result)=>{
               if(err) return res.status(500).send({ message : 'Select Database Error', err })
    
               res.status(200).send(result)
           })
       },

    addDataCustomer : (req,res) => {

        var sql = `INSERT INTO data_customer SET ?`;

        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'INSERT into database error', err })

            res.status(200).send(result)
        })
    },

    totalPrice  : (req,res) => {

        var sql = `SELECT sum (harga * quantity) as totalPrice
                                FROM cart c
                                JOIN products p
                                ON p.id = c.id_product
                                WHERE c.id_user = ${req.params.id};`;
        
        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select totalprice from database error', err})

            res.status(200).send(result)
        })
    },

    cartCheckOut : (req,res) => {

        var time = moment().format('YYYY-MM-DD HH:mm:ss')
        var status = 'waiting payment'
        var cancel = 0

            var sql = `SELECT
                            c.id as idcart, 
                            c.id_user as userId,
                            d.alamat as alamat,
                            sum(harga * quantity) as totalPrice
                            FROM cart c
                            JOIN products p
                            ON p.id = c.id_product
                            JOIN data_customer d
                            ON d.id_user = c.id_user
                            WHERE c.id_user = ${req.params.id}; `;

                    sqlDB.query(sql, (err,result) => {
                        if(err) return res.status(500).send({ message : 'select database error', err})

                        let kode = Math.floor(new Date().getTime() / (result[0].idcart * 1000000))
        
                        sql = `INSERT INTO transaction_item VALUES 
                           (${null}, '${result[0].userId}', '${result[0].alamat}', ${result[0].totalPrice}, '${status}', ${cancel}, '${time}', ${null}, ${kode})`
        
                          sqlDB.query(sql, (err,result1) => {
                            if(err) return res.status(500).send({ message : 'INSERT transaction_item database error', err})
                            
                            // console.log(result1)

                            sql = `INSERT INTO transaction_details
                                    (id_trx_item, id_product, harga , quantity)
                                    SELECT     t.id as id_trx_item,
                                                p.id as id_product,
                                                p.harga as harga,
                                                c.quantity as quantity
                                                from cart c
                                                JOIN transaction_item t
                                                ON t.userId = c.id_user
                                                JOIN products p
                                                ON p.id = c.id_product
                                                WHERE c.id_user = ${req.params.id}`

                                               
                             sqlDB.query(sql, (err, result2) => {
                                 if(err) return res.status(500).send({ message : 'insert transaction_details failed', err})

                                // console.log(result2)

                                 sql = `DELETE FROM cart where id_user = ${sqlDB.escape(req.params.id)};`;

                                 sqlDB.query(sql, (err,result3) => {
                                     if(err) return res.status(500).send({ message : 'delete from database error', err})

                                     sql = `SELECT id from transaction_item where userId =  ${req.params.id}`;

                                        sqlDB.query(sql, (err, result4) => {
                                            if(err) return res.status(500).send({ message : 'select id from trx item from database error', err})

                                            // console.log(result4)

                                                sql = `CREATE EVENT trx_${result4.length}
                                                        ON schedule
                                                        AT CURRENT_TIMESTAMP + INTERVAL 2 minute
                                                        DO
                                                        UPDATE transaction_item SET status = "expired", cancel = 1
                                                        WHERE userId = ${sqlDB.escape(req.params.id)};`;
            
                                                sqlDB.query(sql, (err, result5) => {
                                                    if(err) return res.status(500).send({ message : 'create event from database error', err})
        
                                                    res.status(200).send(result5)
                                            })
                                    })
                                 })
                             }) 

                        })
                    })
        },

        getTransactionItemWithTimeStampId : (req,res) => {

             
            var sql = `SELECT *, timestampadd(hour,1, tgltrx) as tgltrx_expired,
                       timestampdiff(second, now(), tgltrx + interval 1 hour) * 1000 as timediff
                       FROM transaction_item where userId = ${sqlDB.escape(req.params.id)};`;
            

            sqlDB.query(sql, (err, result) => {
                if(err) return res.status(500).send({ message : ' Select from database error' , err})


                res.status(200).send(result)
                // console.log(result)
            })
        },
        
        getHistoryJoinDataCustomerId : (req,res) => {

            var sql = `SELECT * FROM transaction_item ti JOIN data_customer d ON d.id_user = ti.userId
                       WHERE userId = ${req.params.id};`;

            sqlDB.query(sql, (err,result) => {
                if(err) return res.status(500).send({ message : 'Select from database error' , err })

                res.status(200).send(result)
                // console.log(result)
            })
        },


        getHistoryQuery : (req,res) => {

            var sql = `SELECT * FROM transaction_item;`;

            sqlDB.query(sql, (err,result) => {
                if(err) return res.status(500).send({ message : 'Select from database error' , err })

                res.status(200).send(result)
                // console.log(result)
            })
        },

        getHistoryDetailsId : (req,res) => {

            var sql = `SELECT id FROM transaction_item
                       WHERE userId = ${req.params.id};`;

            sqlDB.query(sql, (err,result) => {
                if(err) return res.status(500).send({ message : 'Select id from trx item error' , err })

                // console.log(result)

                sql = `SELECT * FROM transaction_details td JOIN products p ON p.id = td.id_product
                       WHERE id_trx_item = ${result[0].id}`;

                sqlDB.query(sql,(err,result1) => {
                    if(err) return res.status(500).send({ message : 'Select all from trx details error' , err })

                    res.status(200).send(result1)
                })

            })
        },

        addImageUpload : (req,res) => {

            const path = '/images/uploadtrx';
            const upload = uploader(path, 'trx').single('uploaduser');

            upload(req, res, (err) => {
                if(err) return res.status(500).send({message : 'Image Upload to api Failed', err})

                // console.log(req.file)
                const data = {upload_image : path + '/' + req.file.filename}

                var sql = `UPDATE transaction_item SET ? WHERE id = ${req.params.id}; `;

                sqlDB.query(sql, data, (err1,result) => {
                    if(err1){
                        return (
                            res.status(500).send({message : 'Insert Image failed', err : err1}),
                            fs.unlinkSync('./public' + path + '/' + req.file.filename)
                        )
                    } 

                    sql = `UPDATE transaction_item set status ='Waiting Confirmation' WHERE id =${req.params.id};`;

                    sqlDB.query(sql, (err,result1) => {
                        if(err) return res.status(500).send({ message : 'Update status from trx item failed'})

                        sql = `SELECT id from transaction_item WHERE userId = 
                                (SELECT userId from transaction_item WHERE id = ${req.params.id});`;
    
                        sqlDB.query(sql, (err,result2) => {
                            if(err) return res.status(500).send({ message : 'Select id from trx item failed'})

                            // console.log(result2)
       
                            sql =  `DROP EVENT trx_${result2.length}`;
        
                            sqlDB.query(sql, (err,result3) => {
                                if(err1) return res.status(500).send({message : 'Drop event failed', err})

                                // console.log(result3)
        
                                res.status(200).send(result3)
                      })
                    })
                  }) 
                })
            }) 
        },

        updateStatusPayment : (req,res) => {

            var sql = `UPDATE transaction_item SET status='Success' WHERE id=${req.params.id};`;

            sqlDB.query(sql, (err,result) => {
                if(err) return res.status(500).send({ message : 'Update status failed', err})

                res.status(200).send(result)
            })
        },

    }
       
                
        

