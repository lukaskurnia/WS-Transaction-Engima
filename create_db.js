var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ws-transaction"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS person(id int(11) NOT NULL AUTO_INCREMENT, first_name varchar(50) NOT NULL DEFAULT '0', last_name varchar(50) NOT NULL DEFAULT '0', PRIMARY KEY (id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
