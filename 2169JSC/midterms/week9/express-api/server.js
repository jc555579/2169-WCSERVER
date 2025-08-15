const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/data', (req, res) => {
  res.json( {message: 'This is JSON data', time: new Date()} );
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';

  res.json({
    messge: `Hello, ${name}`,
    date: new Date(),
    info: 'Same resource with personalized using query parameters'
  });
});

// dog
app.get('/dog', (req, res) => {
  const breed = 'Askal';

  res.json({
    breed,
    description: 'Indigenous, mixed-breed dogs found throughout the Philippines'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost/${PORT}`);
});
