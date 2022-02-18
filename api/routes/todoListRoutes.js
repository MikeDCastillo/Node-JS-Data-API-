'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    app.route('/tasks')
    .get(todoList.list_all_tasks);
}