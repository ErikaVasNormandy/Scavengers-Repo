var express = require('express');
var app=express();

app.use(express.static(__dirname));
app.get('/', function(req, res){


	res.sendFile(__dirname + '/src/index.html');
});

app.listen(8081, function(req, res) {
	console.log(__dirname);
});


