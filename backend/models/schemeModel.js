const mongoose = require('mongoose');

const schemeSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eligibility: { type: String, required: true },
    benefits: { type: String, required: true },
    category: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Scheme = mongoose.model('Scheme', schemeSchema);

module.exports = Scheme;
