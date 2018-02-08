var mongoose = require('mongoose');

// == Model
var todoSchema = new mongoose.Schema({
	name : {
		type: String,
		required: "Name cannot be blank!"
	},
	completed : {
		type: Boolean,
		default: false
	},
	created_date : {
		type: Date,
		default: Date.now
	}
});

// creates the actual model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;