const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    countryCode: {
      type: Number,
      required: false,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: false,
    },
    language: {
      type: String,
      required: [true, 'language is required'],
      unique: false,
    },
  },
  { timestamps: { currentTime: () => new Date().getTime() } }
);

module.exports = mongoose.model('country', countrySchema,'countries');
