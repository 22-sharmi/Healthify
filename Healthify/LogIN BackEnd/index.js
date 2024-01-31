const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const collection = require('./mongodb');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'API is running.' });
});

app.post('/signup', async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            password: req.body.password
        };
        await collection.create(data);
        res.json({ success: true });
    } catch (error) {
        console.error('Error in signup:', error);
        res.json({ success: false });
    }
});

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name, password: req.body.password });

        if (check) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 444;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});