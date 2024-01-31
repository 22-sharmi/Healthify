const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/GenderDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
})
.catch(() => {
    console.log("Failed to Connect");
});

const GenderSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true
  }
});

const Gender = mongoose.model('Gender', GenderSchema);

module.exports = Gender;