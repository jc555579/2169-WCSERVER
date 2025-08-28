const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'get-index.html');
}); 

/* In discussion component
app.get('/process_get', (req, res) => {
  // Prepare output in JSON format 
  response = {
    firstname: req.query.firstname,
    lastname: req.query.lastname
  }

  console.log(response);
  res.end(JSON.stringify(response));
});
*/

// New Component
app.get('/process_get', (req, res) => {
  // Prepare output in JSON format 
  response = {
    firstname: req.query.firstname,
    lastname: req.query.lastname
  }

  let result = `Welcome ${response.firstname} + ' ' + ${response.lastname}`;
  
  res.sendFile(__dirname + '/' + 'login-successfull.html');
});






app.listen(3000, () => console.log('Server running at http://localhost:3000'));
