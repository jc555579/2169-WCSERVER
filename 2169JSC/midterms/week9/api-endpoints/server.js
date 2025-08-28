const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [
  {id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000},
  {id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000},
  {id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000},
  {id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000},
  {id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000},
  {id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000}        
];

// Root route
app.get('/', (req, res) => {
  res.send(`
    <h2>Available Routes:</h2>
    <ul>
      <li>GET /api/users → Get all users</li>
      <li>GET /api/users/:id → Get user by ID</li>
      <li>GET /api/users/:id/:name → Get user params (id & name)</li>
      <li>POST /api/users → Add new user</li>
      <li>DELETE /api/delete/:id → Delete user by ID</li>
    </ul>
    `);
});

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by id
app.get('/api/users/:id', (req, res) => {
  // Perform casting to int
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  // Checks if user not found
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// GET id and name of user
app.get('/api/users/:id/:name', (req, res) => {
  const { id, name } = req.params;
  res.json({ id, name });
});

// To use POST user
app.get('/add-user', (req, res) => {
  res.sendFile(__dirname + '/user-post.html'); 
});

// POST new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,  // simple id generator
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  users.push(newUser);   // push it to the array
  res.json(newUser);
});

// Delete User Route
app.get('/delete-user', (req, res) => {
  res.sendFile(__dirname + '/user-delete.html'); 
});

// DELETE a user by ID
app.post("/api/delete", (req, res) => {
  const userId = parseInt(req.body.id);
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    const userDeleted = users.splice(index, 1); // remove user from array
    res.json({ 
      message: "User deleted successfully",
      deletedUser: userDeleted[0]
     });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));