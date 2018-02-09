// FOR ROUTES

// require express
var express = require('express');
// makes contents of file exportable and usable to other files
var router = express.Router();
// connects to database, == connect_to_db helper function
var db = require('../models');
// connects to helper functions, == import library
var helpers = require('../helpers');

// == @app.routes
router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo);

// for specific todo id object
router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo);

module.exports = router;
