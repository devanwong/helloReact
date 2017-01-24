//'express' is pulling from the package.json to access the express API
var express = require('express');

//Create out App
var app = express();
//app.use adds functionality to your express App
//express.static specify a folder name that we want to expose to the web server
app.use(express.static('public'));


//app.listen allows for the web server to be ran. It takes two arguements the first being what port you want to use
app.listen(3000, function(){
  console.log('Express service is up on port 3000');
})
