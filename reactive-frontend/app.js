var express = require('express');
var app=express();

app.use(express.static(__dirname));
var activeRoutes = [ '/', '/clickjacking', '/sickOS','/UsefulBits','/WorldBuilding','/Projects','/materials', '/resources','/Projects/clickjacking','/Projects/sickOS','/Projects/BootableKaliWindows']

app.get(activeRoutes, function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(8081, function(req, res) {
	console.log(__dirname + '/public/index.html');
});
