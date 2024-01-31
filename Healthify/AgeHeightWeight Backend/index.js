// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors')
// const Age = require('./mongodb'); // Import MongoDB schema

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/AgeDetails', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Middleware
// app.use(bodyParser.json());
// app.use(cors())

// // Routes
// app.post('/age', async (req, res) => {
//   try {
//     // Create a new Age document with the received data
//     const newAge = new Age({
//       age: req.body.age
//     });

//     // Save the Age document to the database
//     await newAge.save();

//     // Respond with a success message
//     res.status(201).json({ message: 'Age saved successfully.' });
//   } catch (error) {
//     // If an error occurs, respond with an error message
//     console.error('Error:', error);
//     res.status(500).json({ message: 'An error occurred.' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./mongodb');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API is running.' });
});

app.post('/user', async (req, res) => {
  try {
    const { age, height, weight } = req.body;
    const newUser = new User({ age, height, weight });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
