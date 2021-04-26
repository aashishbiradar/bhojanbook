const mongoose = require('../services/mongoose');

const { Schema } = mongoose;
const HotelSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  fullAddress: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  contactMobile: {
    type: Number,
    required: true,
    trim: true,
    length: 10,
  },
  menu: [{
    categoryName: {
      type: String,
      trim: true,
      minlength: 3,
    },
    categoryPosition: {
      type: Number,
    },
  }],
});

module.exports = mongoose.model('Hotels', HotelSchema);
