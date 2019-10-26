const { sqlDB } = require('../database');

module.exports = {

    getSeduhBox : (req,res) => {

        var sql = `SELECT * FROM artikel`

        sqlDB.query(sql, (err,result) => {
            if(err) return res.status(500).send({ message : 'Select from database error' , err})

            res.status(200).send(result)
        })
    }
}