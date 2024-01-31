// // mongodb.js
// const mongoose = require('mongoose');

// // Define schema
// const AgeSchema = new mongoose.Schema({
//   age: {
//     type: Number,
//     required: true
//   }
// });

// // Create model
// const Age = mongoose.model('Age', AgeSchema);

// module.exports = Age;
// mongodb.js
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/AgeHeightWeightDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected");
})
.catch(() => {
  console.log("Failed to Connect");
});

const userSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
