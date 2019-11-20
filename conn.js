
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ws_transaction"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;