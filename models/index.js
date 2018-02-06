var mongoose = require('mongoose');

// keep from failing in silence
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

//removes need for callback functions
mongoose.Promise = Promise;