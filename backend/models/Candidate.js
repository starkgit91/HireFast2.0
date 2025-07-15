const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  experience: Number,
  skills: [String],
  location: String,
  resume: String,
  diversityTags: [String]
});

module.exports = mongoose.model('Candidate', candidateSchema);
