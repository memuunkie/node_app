// framework for node
// app == Flask(__name__)
// also sorta "requirements"
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

// makes connection and contains exports of routes/todos.js
var todoRoutes = require('./routes/todos');

// uses body-parser to access the request body in a put/post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// == @app.routes
app.get('/', function(req, res){
	// can be text(html) or JSON returned (if formatted as JSON object)
	res.send("HELLO FROM THE ROOT ROUTE (this is a test)");
	// this is more explicit: res.json({message: "HI THERE FROM EXPRESS (this is a test)"})
	// res.send calls res.json
});

// pass in name of api routes (default '/') & where to find routes
app.use('/api/todos', todoRoutes);

app.get('/happy', function(req, res) {
	res.send(":) I did it!");
});

// assign what port the app should be listening to + callback function
app.listen(port, function() {
	console.log("APP IS RUNNING ON PORT " + port);
});
