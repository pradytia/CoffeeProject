const { sqlDB } = require('../database');

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
                                ON p.id = c.id_product;`;
        
        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select totalprice from database error', err})

            res.status(200).send(result)
        })
    }
}

