const Scheme = require('../models/schemeModel');

// @desc    Fetch all schemes
// @route   GET /api/schemes
// @access  Public
const getSchemes = async (req, res) => {
  const schemes = await Scheme.find({});
  res.json(schemes);
};

// @desc    Fetch single scheme
// @route   GET /api/schemes/:id
// @access  Public
const getSchemeById = async (req, res) => {
  const scheme = await Scheme.findById(req.params.id);

  if (scheme) {
    res.json(scheme);
  } else {
    res.status(404).json({ message: 'Scheme not found' });
  }
};

module.exports = { getSchemes, getSchemeById };
