const { sqlDB } = require('../database');

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
    }
}