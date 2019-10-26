const { sqlDB } = require('../database');

module.exports = {

    getCartId : (req,res) => {

        var sql = `SELECT * 
                            from cart c
                            JOIN products p
                            ON p.id = c.id_product
                            WHERE id_user = ${sqlDB.escape(req.params.id)} `;
                            // ${sqlDB.escape(req.body.id_user)}

        sqlDB.query(sql, (err,result)=>{
            if(err) return res.status(500).send({ message : 'Select Database Error', err })

            res.status(200).send(result)
        })
    },

    getCart : (req,res) => {

        var id_user = req.query.id_user || ''
        var id_product = req.query.id_product || ''

        var sql = `SELECT * 
                            from cart c
                            JOIN products p
                            ON p.id = c.id_product
                            WHERE id_user = ${id_user}
                            AND id_product = ${id_product} `;
                            // ${sqlDB.escape(req.body.id_user)}

        sqlDB.query(sql, (err,result)=>{
            if(err) return res.status(500).send({ message : 'Select Database Error', err })

            res.status(200).send(result)
        })
    },

    addTocart : (req,res) => {
        var sql = `INSERT INTO cart SET ?`;

        sqlDB.query(sql, req.body, (err,result) => {
            if(err) return res.status(500).send({ message : 'Insert Database Error', err })

            res.status(200).send({ message: 'Insert Database berhasil', result})
        })
    }
}