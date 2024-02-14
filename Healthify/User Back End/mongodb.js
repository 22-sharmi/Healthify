const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UserDetails', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
})
.catch(() => {
    console.log("Failed to Connect");
});

const UserSchema = new mongoose.Schema({
 what:Array,
  gender:String,
  lang:String,
  age:Number,
  height:Number,
  weight:Number,
  name: String,
  active:String,
  city:String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;