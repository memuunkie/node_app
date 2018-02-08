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

// to find and show specific todo id object
router.get('/:todoId', function(req, res) {
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo) {
		res.json(foundTodo);
	})
	.catch(function(err) {
		res.send(err);
	})
});

// to update specific todo id object
router.put('/:todoId', function(req, res) {
	//req.send("TESTING"); <= test that route is working
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //<= set true to show updated info
	.then(function(todo) {
		res.json(todo);
	})
	.catch(function(err) {
		res.send(err);
	})
});

// to delete specific todo id object
router.delete('/:todoId', function(req, res) {
	db.Todo.remove({_id: req.params.todoId})
	.then(function() {
		res.json({message: 'Deleted now!'})
	})
	.catch(function(err) {
		res.send(err);
	})
});

module.exports = router;
