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

            res.status(200).send(result)
        })
    },

    getBrewerId : (req,res) => {

        var sql = `SELECT * FROM products
                            WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },

    addBrewer : (req,res) => {

        var sql = `INSERT INTO brewer SET ?`;

        sqlDB.query(sql, req.body, (err,result)=> {
            if(err) res.status(500).send({ message : 'Insert into database error'}, err)

            res.status(200).send(result)
        })
    },

    editBrewer : (req,res) => {

        var sql = `UPDATE brewer SET ? WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, req.body, (err, result) => {
            if(err) res.status(500).send({ message : 'Insert into database error'}, err)

            res.status(200).send(result)
        })
    },

    deleteBrewer : (req,res) => {

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

    addEquipment : (req,res) => {

    },  

    editEquipment : (req,res) => {

    },

    deleteEquipment : (req,res) => {

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

    addGift : (req,res) => {

    },

    editGift : (req,res) => {

    },

    deleteGift : (req,res) => {

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

    addKopi : (req,res) => {

    },

    editKopi : (req,res) => {

    },

    deleteKopi : (req,res) => {

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

    addTool : (req,res) => {

    },

    editTool : (req,res) => {

    },

    deleteTool : (req,res) => {

    },

    //================================== PAKET USAHA =============================\\

    getPaketUsaha : (req,res) => {
        var sql = `SELECT * FROM paketusaha`

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({ message : 'Database Error' , err})

            res.status(200).send(result)
        })
    },

    getPaketusahaId : (req,res) => {

        var sql = `SELECT * FROM paketusaha WHERE id = ${sqlDB.escape(req.params.id)}`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select Database by Id Error', err})

            res.status(200).send(result)
        })
    },

    addPaketUsaha : (req,res) => {

    },

    editPaketUsaha : (req,res) => {

    },

    deletePaketUsaha : (req,res) => {

    }
}