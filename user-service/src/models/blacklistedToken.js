const mongoose = require('mongoose');

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 604800,
  },
});

module.exports = mongoose.model(
  'BlacklistedToken',
  blacklistedTokenSchema,
  'blacklisted_tokens'
);