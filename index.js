// framework for node
// app == Flask(__name__)
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000

// == @app.routes
app.get('/', function(req, res){
	// can be text(html) or JSON returned (if formatted as JSON object)
	res.send("HI THERE FROM EXPRESS (this is a test)");
	// this is more explicit: res.json({message: "HI THERE FROM EXPRESS (this is a test)"})
	// res.send calls res.json
});

app.get('/happy', function(req, res) {
	res.send(":) I did it!");
});

// assign what port the app should be listening to + callback function
app.listen(port, function() {
	console.log("APP IS RUNNING ON PORT " + port);
});
