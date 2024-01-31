const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/LangDetails', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
})
.catch(() => {
    console.log("Failed to Connect");
});

const LangSchema = new mongoose.Schema({
  lang: {
    type: String,
    required: true
  }
});

const Lang = mongoose.model('Lang', LangSchema);

module.exports = Lang;