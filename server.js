var express = require('express'),
    app = express(),
    port = process.env.PORT  || 3000
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'); //created model loading

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); // register the route

app.listen(port);

console.log('todolistapp started on port:' + port);
