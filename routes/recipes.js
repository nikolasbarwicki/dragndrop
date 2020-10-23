const express = require('express');
const {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipes');

const router = express.Router();

router.route('/').get(getRecipes).post(createRecipe);

router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

module.exports = router;
