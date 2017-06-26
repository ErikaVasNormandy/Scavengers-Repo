

var express = require('express');
var app=express();

///app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname));
app.get('/', function(req, res){
//	res.send('welcome!!');
//{'root': __dirname+'/index'}
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(req, res) {
	console.log(__dirname);
});

