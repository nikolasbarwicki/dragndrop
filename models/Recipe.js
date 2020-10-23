const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  ingredients: {
    type: Array,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
