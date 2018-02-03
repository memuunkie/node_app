var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000

app.get('/', function(req, res){
	res.send("HI THERE FROM EXPRESS (this is a test)");
});

app.get('/happy', function(req, res) {
	res.send(":) I did it!");
});

app.listen(port, function() {
	console.log("APP IS RUNNING ON PORT " + port);
});
