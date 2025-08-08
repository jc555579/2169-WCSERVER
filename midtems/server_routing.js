var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
  console.log('There is a GET request for the homepage!');
  res.send('Here is the GET Method!');
});

// This responds a POST request for the homepage
app.post('/', (req, res) => {
  console.log('A POST request for the homepage is accessed.');
  res.send('Here is the POST Method');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', (req, res) => {
  console.log('Got a GET request for /ab*cd');
  res.send('Pattern Match Page');
});

app.get('/list_user', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('This is Page Listing');
});

// profile
app.get('/profile', (req, res) => {
  console.log('Got a GET request for /list_user');
  res.send('Joemar Catipon');
});

var server = app.listen(4000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
