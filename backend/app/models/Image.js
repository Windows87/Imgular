const mongoose = require('../database');
const Schema = mongoose.Schema;

const Image = new Schema({
  image_name: { type: String, required: true },
  title: { type: String, required: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', Image);