'use strict';

var response = require('./res');
var connection = require('./conn');

exports.transactions = function(req, res) {
    connection.query('SELECT * FROM transaction_info', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Welcome to Transaction WS", res)
}

exports.createTxn = function(req, res) { //Post
    
    var user_id = req.body.user_id;
    var acc = req.body.virtual_acc;
    var mov_id = req.body.movie_id;
    var movie_schedule = req.body.mov_schedule
    var seat_num = req.body.seat_number;

    connection.query('INSERT INTO transaction_info (user_id, virtual_acc, movie_id, mov_schedule, seat_number) values (?,?,?,?,?)',
    [user_id, acc, mov_id, movie_schedule, seat_num], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Transaction created.", res)
        }
    });
};