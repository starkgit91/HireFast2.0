const Candidate = require('../models/Candidate');

exports.getAllCandidates = async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
};

exports.getTopCandidates = async (req, res) => {
  const candidates = await Candidate.find();
  const ranked = candidates.map((c) => ({
    ...c._doc,
    score:
      (c.experience || 0) +
      (c.skills?.length || 0) +
      (c.diversityTags?.includes('female') ? 2 : 0),
  }));
  ranked.sort((a, b) => b.score - a.score);
  res.json(ranked.slice(0, 5));
};
