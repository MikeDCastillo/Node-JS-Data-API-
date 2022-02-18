'use strict'
var mongoose = require('mongoose');
    Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
    res.json('Hello');
}