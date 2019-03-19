var mysql = require("mysql");
var db = {};
db.query = function (sql,queryArray ,callback) {
    var connect = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '123456',
        database:'test_first',
        port: 3306
    });
    connect.connect();
    connect.query(sql,queryArray, function(err,rows){
       if(err)console.log(err);
        callback(rows);
    });
    connect.end();
};
//输出db
module.exports = db;