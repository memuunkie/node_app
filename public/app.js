$(document).ready(function() {
	// display current list
	$.getJSON('/api/todos')
	.then(addTodos)
	.catch(function(err) {
		console.log(err);
	});
	// listening for 'Enter' after entering in new task
	$('#todoInput').keypress(function(event) {
		if(event.which == 13) {
			createTodo();
		}
	});
	// listener for 'X' span click
	$('.list').on('click', 'span', function() {
		removeTodo($(this).parent());
	});

});

function addTodos(todos) {
	// adds todos from database to page
	todos.forEach(function(todo) {
		addTodo(todo);
	});
}

function addTodo(todo) {
	// add individual todo and conditional formatting
	var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
	newTodo.data('id', todo._id);
	if(todo.completed) {
		newTodo.addClass('done');
	}
	$('.list').append(newTodo);
}

function createTodo() {
	// send request to create new todo
	var userInput = $('#todoInput').val();
	$.post('/api/todos', {name: userInput})
	.then(function(newTodo) {
		$('#todoInput').val('');
		addTodo(newTodo);
	})
	.catch(function(err) {
		console.log(err);
	})
}

function removeTodo(todo) {
	// delete todo from database
	var clickedId = todo.data('id');
	var deleteUrl = '/api/todos/' + clickedId;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function(data) {
		todo.remove();
	})
	.catch(function(err) {
		console.log(err);
	});
}