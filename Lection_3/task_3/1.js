var express = require("express");
var app = express();
var fs = require("fs");

app.get("/files", function(req, res){
	myWebPage="<html><head><title><Files service></title><meta charset=\"UTF-8\"</head><body>";
	myWebPage+="<table border=\"1\"><tr><td>Files You have: </td></tr>";
	fs.readdir ("./Data", function(err, data){
		if (err){
			console.log(err);
		}else{
			for(var i=0; i<data.length; i++){
				file = data[i];
				stats = fs.statSync("./Data/" + file);
				if (stats.isDirectory() == false){
					myWebPage+="<tr><td><a href=\"http://localhost:9090/Data"+ file + "\"download>"+ data[i] + "</a></td></tr>";
				}
			}
		}
		myWebPage += "</table></body></html>";
		res.write(myWebPage);
		res.end();
	});
	res.write;
});

app.listen(9090, function(err){
	if (err){
		console.log(err);
	}else{
		console.log("Everything seems to be working :");
	}
});
