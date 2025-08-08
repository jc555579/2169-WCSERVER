var express = require('express');
var app = express();

// pass static assets to the static middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('You have successfully created second app!');
})

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});