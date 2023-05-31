const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Accessory', // This is refering to the model Accessory
    },
  ],
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
