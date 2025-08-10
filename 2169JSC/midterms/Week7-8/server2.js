var express = require('express');

var app = express();

app.get('/', (request, response) => {
  response.send('You have successfully created your second app!');
}); 

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
