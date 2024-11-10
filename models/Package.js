const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model('Package', packageSchema);
