const { sqlDB } = require('../database');
const moment = require('moment');
const { uploader } = require('../helpers/uploader');


module.exports = {

    getArtikel : (req,res) => {

        var sql = `SELECT * FROM artikel`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getArtikelId  : (req,res) => {

        var sql = `SELECT * FROM artikel WHERE id = ${sqlDB.escape(req.params.id)}`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getMaterial :  (req,res) => {

        var sql = `SELECT * FROM materials_artikel WHERE id_artikel = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getSteps : (req,res) => {

        var sql = `SELECT * FROM steps_artikel WHERE id_artikel = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getVideo :  (req,res) => {

        var sql = `SELECT * FROM video_subscription;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getPaketSubscription : (req,res) => {

        var sql = `SELECT * FROM paket_subscription;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    }, 

    getPaketSubscriptionId : (req,res) => {

        var sql = `SELECT * FROM paket_subscription WHERE id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getDeskripsiSubscription : (req,res) => {

        var sql = `SELECT * FROM deskripsi_subscription;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },

    getDeskripsiSubscriptionId :  (req,res) => {

        var sql = `SELECT * FROM deksripsi_subscription WHERE id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    },
    
    getCartSubscriptionId : (req,res) => {

        var sql = `SELECT c.id as idcart,
                          c.id_paketsubs as idpaket, 
                          c.id_user as iduser, 
                          p.nama_paket as namapaket, 
                          p.harga as harga, 
                          p.path_image as image
                             FROM cartsubs c
                             JOIN paket_subscription p
                             ON p.id = c.id_paketsubs
                             where c.id_user = ${req.params.id}`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select cartsubs from database error' , err})

            res.status(200).send(result)
        })
    },

    getCartSubsQuery : (req,res) => {

       let iduser =  req.query.iduser || ''

        var sql = `SELECT * FROM cartsubs WHERE id_user LIKE '%${iduser}%';`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select cartsubs by query error' , err})

            res.status(200).send(result)
        })
    }, 

    addCartSubscription : (req,res) => {
        
        var sql = `INSERT INTO cartsubs SET ?;`;

        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'Insert into cartsubs error' , err})

            res.status(200).send(result)
        })
    },

    addIntoTrxItem : (req,res) => {
        const path = '/images/uploadtrx'
        const upload = uploader(path, 'trxsubs').single('uploadtrf')

        upload(req,res, (err) => {
            if(err) return res.status(500).send({ message : 'Upload Image Into Api Failed', err})

            let pathimage = path +'/' + req.file.filename
            let status =  'Waiting Confirmation For Subscription'
            let cancel = 0
            let time = moment().format('YYYY-MM-DD HH:mm:ss')

            var sql = `SELECT c.id_user as userId,
                              p.harga as totalPrice,
                              p.deskripsi as deskripsi
                              from cartsubs c
                              JOIN paket_subscription p
                              ON p.id = c.id_paketsubs
                              WHERE c.id_user = ${req.params.id};`;

            sqlDB.query(sql, (err,result) => {
                if(err) return res.status(500).send({ message : 'Select from db error', err})

                sql = `INSERT INTO historysubscription VALUES 
                      (${null}, ${result[0].userId}, ${result[0].totalPrice}, '${status}', ${cancel}, '${time}', '${result[0].deskripsi}','${pathimage}')`;

                sqlDB.query(sql,(err,result1) => {
                    if(err) return res.status(500).send({ message : 'Insert into historysubs error', err})

                        sql = `DELETE FROM cartsubs where id_user = ${req.params.id};`;

                        sqlDB.query(sql, (err,result3) => {
                            if(err) return res.status(500).send({ message : 'Delete cartsubs from db error', err})
        
                            console.log(result3)
                            res.status(200).send(result3)
                    })
                })
            })
        })
    },

    getHistorySubscription : (req,res) => {
        
        var sql = `SELECT * FROM historysubscription;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'select historysubs error', err})

            res.status(200).send(result)
        })
    },

    getHistorySubscriptionId : (req,res) => {
        
        var sql = `SELECT * FROM historysubscription WHERE id_user = ${req.params.id};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'select historysubs error', err})

            res.status(200).send(result)
        })
    },

    updateStatusRole : (req,res) => {
        
       var sql = `SELECT * FROM historysubscription WHERE id=${req.params.id};`;

       sqlDB.query(sql, (err,result) => {
           if(err) return res.status(500).send({ message : 'select from db error', err})

           sql = `UPDATE historysubscription SET status='Success' WHERE id=${req.params.id};`;

           sqlDB.query(sql, (err,result1) => {
               if(err) return res.status(500).send({ message : 'Update status failed', err})

               sql =  `UPDATE users SET role='userpremium' where id=${result[0].id_user}`;

               sqlDB.query(sql, (err,result2) => {
                   if(err) return res.status(500).send({ message : 'Update role failed', err})
   
                   res.status(200).send(result2)
               })
           })
       })
    }
}