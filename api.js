var express = require("express");
var fs = require('fs');
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	})
var obj = JSON.parse(fs.readFileSync('graph.json', 'utf8'));

app.get("/getJsonPortfolio", (req, res, next) => {
	 res.json(obj);
	});

var obj2 = JSON.parse(fs.readFileSync('health.json', 'utf8'));

app.get("/getJsonHealth", (req, res, next) => {
	 res.json(obj2);
	});