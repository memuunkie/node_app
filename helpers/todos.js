// helper functions for routes/todos.js

// create db to connect and locate file folder
var db = require('../models');

// create and name the helper functions for export
// GET to '/'
exports.getTodos = function(req, res) {
	db.Todo.find()
	.then(function(todos) { // return the JSON
		res.json(todos);
	})
	.catch(function(err) { //error catching
		res.send(err);
	})
}

// POST to '/'
exports.createTodo = function(req, res) {
	db.Todo.create(req.body)
	.then(function(newTodo) {
		res.status(201).json(newTodo);
	})
	.catch(function(err) {
		res.send(err);
	})
}

// GET to '/:todoId'
exports.getTodo = function(req, res) {
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo) {
		res.json(foundTodo);
	})
	.catch(function(err) {
		res.send(err);
	})
}

// PUT to '/:todoId'
exports.updateTodo = function(req, res) {
	//req.send("TESTING"); <= test that route is working
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //<= set true to show updated info
	.then(function(todo) {
		res.json(todo);
	})
	.catch(function(err) {
		res.send(err);
	})
}

// DELETE to '/:todoId'
exports.deleteTodo = function(req, res) {
	db.Todo.remove({_id: req.params.todoId})
	.then(function() {
		res.json({message: 'Deleted now!'})
	})
	.catch(function(err) {
		res.send(err);
	})
}

module.exports = exports;