const express = require('express');
const connectToDatabase = require('./config/database');
require("dotenv").config();

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

//Connecting with db
connectToDatabase();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express.js app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
