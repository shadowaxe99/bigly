```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { connectDB } = require('./mongodb_connection');
const { authenticate, createTask, completeTest, updateDocumentation } = require('./rest_apis');

const app = express();
const jwtSecret = 'your-secret-key'; // Replace with your actual secret key

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.post('/authenticate', (req, res) => {
  const { username, password } = req.body;
  authenticate(username, password)
    .then(user => {
      const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  createTask(task)
    .then(task => res.json(task))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/tests', (req, res) => {
  const { test } = req.body;
  completeTest(test)
    .then(test => res.json(test))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/documentation', (req, res) => {
  const { documentation } = req.body;
  updateDocumentation(documentation)
    .then(doc => res.json(doc))
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = { app, jwtSecret };
```