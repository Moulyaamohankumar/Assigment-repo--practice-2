require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./schema'); // Import User model

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch(err => console.error('Error connecting to database:', err));


app.post('/api/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    
   
    if (!name || !email || !age) {
      return res.status(400).json({ message: 'Validation error: All fields are required' });
    }
    
    const newUser = new User({ name, email, age });
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
