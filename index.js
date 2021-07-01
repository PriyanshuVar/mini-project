const R = require('r-integration');
const user_id=20;
let result = R.callMethod("Main.R", "Main", [user_id]);
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World");
  res.end();
}).listen(8080); 

/////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');

// Initialize App
const app = express();

// Assign route
app.use('/', (req, res, next) => {
res.render('index.html', { data:result });
});

// Start server
app.listen(5000, () => {
console.log('App listening on port 5000');
});
*/

const express = require('express');
var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
//const fs = require('fs');

// Initialize App
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

function splitStr(str) {
	
	// Function to split string
	var string = str.split(/(\")/);
  return string;
	
}

// Function call
result=splitStr(String(result));


app.get('/',function(req,res){
    res.render('index', {data:result});
});

app.listen(5000, () => {
    console.log('Website live on port 5000');
    });

    
/*    
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("User");
  var myobj = { UserID:user_id, Movies: result };
  dbo.collection("recommended_movies").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); */
//////////////////////////////////////////////////////////////////////////////////////////
/*
'use strict';

let data = JSON.stringify(result);

fs.writeFile(user_id+'-movies.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');*/