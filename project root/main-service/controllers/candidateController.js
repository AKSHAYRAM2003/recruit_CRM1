const Candidate = require('../models/Candidate');

exports.addCandidate = async (req, res, next) => {
  try {
    const { first_name, last_name, email } = req.body;
    const candidate = new Candidate({
      first_name,
      last_name,
      email,
      user_id: req.userId
    });
    await candidate.save();
    res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    next(error);
  }
};

exports.getCandidates = async (req, res, next) => {
  try {
    const candidates = await Candidate.find({ user_id: req.userId });
    res.json({ candidates });
  } catch (error) {
    next(error);
  }
};