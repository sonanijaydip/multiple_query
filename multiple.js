var mysql = require('mysql');
var express = require('express');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

connection.connect();

app.get('/', function (req, res) {
    var insert_query = "INSERT INTO `user1`(`user1_id`, `name`, `email`) VALUES ('12','krishna','krishna@gmail.com')"

    connection.query(insert_query, function (err, result, field) {
        if (err) throw err;
        res.redirect('/select')
    });

});

app.get('/select', function (req, res) {
    var select_query = "select * from user1"

    connection.query(select_query, function (err, result, field) {
        if (err) throw err;
        res.send(result)
    });
  
});

app.get('/delete/:id', function (req, res) {

    var id = req.params.id;
    var delete_query = "delete from user1 where id="+id;

    connection.query(delete_query, function (err, result, field) {
        if (err) throw err;
        res.redirect('/select')
    });
  
});

app.listen(4000);
