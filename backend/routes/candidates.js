const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Get all candidates
router.get('/', async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

// Get top 5 candidates (you define logic)
router.get('/top5', async (req, res) => {
  const top = await Candidate.find().sort({ experience: -1 }).limit(5);
  res.json(top);
});

// Post new candidate
router.post('/', async (req, res) => {
  try {
    const newCandidate = new Candidate(req.body);
    await newCandidate.save();
    res.status(201).json({ message: 'Candidate created' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
