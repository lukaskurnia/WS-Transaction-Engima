'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/transactions')
        .get(todoList.transactions);

    app.route('/transactions/:txn_id')
        .get(todoList.findTxn);

    app.route('/transactions')
        .post(todoList.createTxn);

    app.route('/transactions')
        .put(todoList.updateTxn);
    
};