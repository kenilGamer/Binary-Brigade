const mongoose = require("mongoose");
// const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Connect to MongoDB without deprecated options
mongoose
  .connect("mongodb+srv://kenilk677:KgbYiGyRpp7HS4cB@cluster0.lziadv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/binarybrigade")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));


// Pre-save hook to hash password


// Define the User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  skill: { type: String, required: true },
  bio: { type: String },
  profileImage: { type: String },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Match" }],
  website: [
    {
      name: { type: String },
      url: { type: String }
    }
  ]
});
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

// Export the model to use in your app
const User = mongoose.model('User', userSchema);
module.exports = User;
