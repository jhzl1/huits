const mysql = require('mysql')
const db = mysql.createConnection({
host: "185.213.81.103:3306",
user: "rou736842021_adminhuitot",
password: "Huit2022.*",
    database:"u736842021_Huit" 
})

module.exports = db;