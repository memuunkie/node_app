// connects to mongodb
// mongoose == SQLAlchemy()

var mongoose = require('mongoose');

// keep from failing in silence
mongoose.set('debug', true);
// connects to db server; creates db called 'todo-api' if does not exist
mongoose.connect('mongodb://localhost/todo-api');

// allows use of Promise syntax; removes need for callback functions
mongoose.Promise = Promise;
// ex: db.Todo.find().then > db.Todo.find(function () {})

// include the todo.js as part of the require
module.exports.Todo = require('./todo');