const { sqlDB } = require('../database');

module.exports = {

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

        var sql = `SELECT * FROM products WHERE idJenis = 3;`;

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({message : 'Database eror'}, err)

            res.status(200).send(result)
        })
    },

    getGiftId : (req,res) => {

        var sql = `SELECT * FROM gift WHERE id = ${sqlDB.escape(req.params.id)}`

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
        var sql = `SELECT * FROM products p 
                            JOIN jenis j
                            ON j.id = p.idJenis
                            WHERE j.id = 4;`;

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({message : 'Database error', err})

            res.status(200).send(result)
        })
    },

    getKopiId :  (req,res) => {

        var sql = `SELECT * FROM kopi WHERE id = ${sqlDB.escape(req.params.id)}`

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
        var sql = `SELECT * FROM products p 
                            JOIN jenis j
                            ON j.id = p.idJenis
                            WHERE j.id = 5;`;

        sqlDB.query(sql, (err, result) => {
            if(err) return res.status(500).send({message : 'Database Error', err})

            res.status(200).send(result)
        })
    },

    getToolId : (req,res) => {

        var sql = `SELECT * FROM tool WHERE id = ${sqlDB.escape(req.params.id)}`

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