const express = require('express');
const bodyParser = require('body-parser');
const User = require('./mongodb');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT ||8080;

// Middleware
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is running.' });
});

app.post('/users', async (req, res) => {
  try {
    const { what, username, password, gender, lang, age, height, weight,city,active, name } = req.body;
    const newUser = new User({
      what,
      username,
      password,
      gender,
      lang,
      age,
      height,
      weight,
      city,
      active,
      name,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
