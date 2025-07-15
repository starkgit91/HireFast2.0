const mongoose = require('mongoose');
const fs = require('fs');
const Candidate = require('../models/Candidate');
require('dotenv').config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const data = JSON.parse(fs.readFileSync('form-submissions.json'));
  await Candidate.deleteMany({});
  await Candidate.insertMany(data);
  console.log('✅ Database seeded successfully');
  process.exit();
};

seed();