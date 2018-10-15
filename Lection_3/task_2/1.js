var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static("."));

app.get('/', function(req, res){

	//Adding HTML to node

	fs.readFile('./index.html', function(err, data){
		if (err){
			console.log("There is no existing .html file or an error has been occured");
		}else{
			res.write(data);
			res.end();
		}
	}); 

	//Adding CSS to node
	
	fs.readFile('./style.css', function(err, data){
		if (err){
			console.log("There is no existing .css file or an error has been occured");
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