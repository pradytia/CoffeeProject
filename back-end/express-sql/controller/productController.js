const { sqlDB } = require('../database');

module.exports = {


    getProduct : (req,res) => {
        var sql = `SELECT   p.id as id_product,
                            nama as nama,
                            idJenis as idJenis,
                            harga as harga,
                            discount as discount,
                            deskripsi as deskripsi,
                            pathImg as pathImg,
                            j.id as id_jenis,
                            namaJenis as namaJenis
                            FROM products p 
                            JOIN jenis j
                            ON j.id = p.idJenis;`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(result)
        })
    },

    getProductId : (req,res) => {

        var sql = `SELECT * FROM products
                            WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },
    
    editProduct : (req,res) => {

        var sql = `UPDATE products SET ? WHERE id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'Update product from database error', err})

            res.status(200).send(result)
        })
    },

    deleteProduct : (req,res) => {

        var sql = `DELETE FROM products WHERE id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Delete product from database error', err})

            res.status(200).send(result)
        })

    },

    addProduct : (req,res) => {

        var sql = `INSERT INTO products SET ?;`;

        sqlDB.query(sql, req.body,(err,result) => {
            if(err) return res.status(500).send({ message : 'Insert into products from database error', err})

            res.status(200).send(result)
        })

    },

    getJenis : (req,res) => {

        var sql = `SELECT * from jenis;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'select jenis from database error', err})

            res.status(200).send(result)
        })
    },

    //================================== BREWER =============================\\

    getBrewer  : (req,res) => {
        
        var sql = `SELECT * FROM products WHERE idJenis = 1;
                            `;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({message : 'database error', err})
            // console.log(result)

            res.status(200).send(result)
        })
    },


    //================================== EQUIPMENT =============================\\

    getEquipment : (req,res) => {
        var sql = `SELECT * FROM products WHERE idJenis = 2;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({message : 'Database error', err})

            res.status(200).send(result)
        })
    },

    getEquipmentId : (req,res) => {

        var sql = `SELECT * FROM products WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },

    //================================== GIFT =============================\\

    getGift : (req,res) => {

        var sql = `SELECT * FROM products WHERE idJenis = 5;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({message : 'Database eror'}, err)

            res.status(200).send(result)
        })
    },

    getGiftId : (req,res) => {

        var sql = `SELECT * FROM products WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },

    //================================== KOPI =============================\\

    getKopi : (req,res) => {
        var sql = `SELECT * FROM products WHERE idJenis = 4;`;

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({message : 'Database error', err})

            res.status(200).send(result)
        })
    },

    getKopiId :  (req,res) => {

        var sql = `SELECT * FROM products WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },

    //================================== TOOL =============================\\

    getTool : (req,res) => {
        var sql = `SELECT * FROM products WHERE idJenis = 3;`;

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({message : 'Database Error', err})

            res.status(200).send(result)
        })
    },

    getToolId : (req,res) => {

        var sql = `SELECT * FROM products WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },


    //================================== PAKET USAHA =============================\\

    getPaketUsaha : (req,res) => {
        var sql = `SELECT * FROM products where idJenis = 6`

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({ message : 'Database Error' , err})

            res.status(200).send(result)
        })
    },

    getPaketusahaId : (req,res) => {

        var sql = `SELECT * FROM products WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },


    getSeacrhProduct : (req,res) => {

        var sql = `SELECT * FROM products WHERE nama LIKE '%${req.query.searching}%';`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by query Error', err})

            res.status(200).send(result)
        })
                                
    },

    getWishlist : (req,res) => {

        let id_user =  req.query.id_user || ''
        let id_product = req.query.id_product || ''

        var sql = `SELECT * FROM wishlist w
                   JOIN products p
                   ON p.id = w.id_product
                   where w.id_user LIKE '%${id_user}%' AND w.id_product LIKE '%${id_product}%';`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by query Error', err})

            res.status(200).send(result)
        })
    },

    deleteWishlist : (req,res) => {

        var sql = `DELETE FROM wishlist WHERE id = ${sqlDB.escape(req.params.id)};`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'DELETE from db Error', err})

            res.status(200).send(result)
        })
    },

    addWishlist : (req,res) => {

        var sql = `INSERT INTO wishlist SET ? `;

        sqlDB.query(sql, req.body,(err,result) => {
            if(err) return res.status(500).send({ message : 'INSERT into db Error', err})

            res.status(200).send(result)
        })
    }
}