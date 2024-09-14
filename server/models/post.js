const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  requiredSkills: [{ type: String, required: true }], // Array of required skills
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User (owner of the post)
  description: { type: String, required: true }, // Description of the post
  githubLink: { type: String, default: '' }, // Optional GitHub link, defaults to an empty string
  star: { type: Number, default: 0 }, // Star rating, defaults to 0
}, {
  timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
