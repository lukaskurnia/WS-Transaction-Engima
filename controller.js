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