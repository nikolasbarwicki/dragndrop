const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({ success: true, data: recipes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: 'Recipe not found' });
    }

    res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!recipe) {
      return res.status(404).json({ msg: 'Recipe not found' });
    }

    res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: 'Recipe not found' });
    }

    recipe.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
