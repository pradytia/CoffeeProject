const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : "pradit",
    password : "password",
    database : "project",
    port : 3306,
    timezone : 'UTC'
})

module.exports = {
    sqlDB : db
}


