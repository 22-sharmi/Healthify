const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Lang = require('./mongodb');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT ||5050;

// Middleware
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is running.' });
});

app.post('/Lang', async (req, res) => {
  try {
    const {lang} = req.body;
    const newLang = new Lang({lang});
    await newLang.save();
    res.status(201).json({ message: 'Language saved successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
