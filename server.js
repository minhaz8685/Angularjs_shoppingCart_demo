//var express = reqiure("express");
const express = require("express");
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen('3000', function(){
    console.log("server running at port: 3000");
});

app.get('/', function(request, response){
    response.sendFile('index.html',{'root':__dirname + '/public'}); 
});