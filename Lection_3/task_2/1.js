var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static("."));

app.get('/', function(req, res){
	fs.readFile('./index.html', function(err, data){
		if (err){
			console.log(err);
		}else{
			res.write(data);
			res.end();
		}
	}); 
});	

app.listen(9090, function(err){ //У меня просто apache стоит
	if (err){
		throw err;
	}else{
		console.log('Everything seems to be working :3');
	}
}); 