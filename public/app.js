$(document).ready(function() {
	$.getJSON('/api/todos')
	.then(addTodos)
	.catch(function(err) {
		res.send(err);
	})
});

function addTodos(todos) {
	// adds todos to page
	todos.forEach(function(todo) {
		var newTodo = $('<li>' + todo.name + '</li>');
		$('.list').append(newTodo);
	})
}