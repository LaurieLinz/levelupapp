const express = require('express');
const app = express();

const https = require('https');

app.use('/', express.static('app'))

app.listen(8000, function(){
  console.log('Really Now listening on port 8000')
});

app.get('/input', function(req, res){
  let line1 = req.param.line1 // { data: { line1: '123 main st', line2: 'denver co, 80202' }}
  let line2 = req.param.line2
  let parameter = {
    apikey: process.env.API_KEY,
    address1: line1,
    address2: line2,
    radius: 2,
  }
  let requestURL = `https://search.onboard-apis.com/propertyapi/v1.0.0/Resource/Package?${parameter}`

  https.get(requestURL, function(res){
    console.log(res);
  });


});
