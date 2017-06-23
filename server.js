const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile('index.html', { root: './app'});
});

app.listen(8000, function (){
  console.log('Really Now listening on port 8000')
});
