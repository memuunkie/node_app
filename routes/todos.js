// FOR ROUTES

// require express
var express = require('express');
// makes contents of file exportable and usable to other files
var router = express.Router();
// connects to database, == connect_to_db helper function
var db = require('../models')

// == @app.routes
router.get('/', function(req, res) {
	db.Todo.find()
	.then(function(todos) { // return the JSON
		res.json(todos);
	})
	.catch(function(err) { //error catching
		res.send(err);
	})
});

router.post('/', function(req, res) {
	db.Todo.create(req.body)
	.then(function(newTodo) {
		res.status(201).json(newTodo);
	})
	.catch(function(err) {
		res.send(err);
	})
});

module.exports = router;
