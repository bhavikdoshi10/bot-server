var mysql = require("mysql");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//Database connection

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "bd3c486c768f8e",
  password: "53aaa9b2",
  database: "heroku_1b5e34ec020a60e"
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
	console.log('Index Page');
  res.send("App is running!!!!");
});

app.get('/all', (req, res) => {
	console.log('Index Page');
	//res.send('world');

  	con.query("SELECT * FROM book_location", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  	});

});

app.post('/all', (req, res) => {
	console.log('Index Page');
	//res.send('world');

  	con.query("SELECT * FROM book_location", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  	});

});

app.post('/check', (req, res) => {
	var test = req.body;
	//res.send(JSON.parse(test));
	console.log("Check Page");
	console.log(req.body);
	res.send(test);
});
//app.use('/books', books);

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});
//module.exports = app;
