import axios from 'axios';

// Get one recipe
export const getRecipe = (recipeId, history) => async (dispatch) => {
  const res = await axios.get(`/api/recipes/${recipeId}`);

  dispatch({
    type: 'GET_RECIPE',
    payload: res.data.data,
  });

  history.push(`/edit-recipe/${recipeId}`);
};

// Get all recipes
export const getRecipes = () => async (dispatch) => {
  const res = await axios.get(`/api/recipes`);

  dispatch({
    type: 'GET_RECIPES',
    payload: res.data.data,
  });
};

// Delete recipe
export const deleteRecipe = (recipeId) => async (dispatch) => {
  await axios.delete(`/api/recipes/${recipeId}`);

  const res = await axios.get(`/api/recipes`);

  dispatch({
    type: 'GET_RECIPES',
    payload: res.data.data,
  });
};

// Create recipe
export const createRecipe = (data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await axios.post('/api/recipes', data, config);

  const res = await axios.get(`/api/recipes`);

  dispatch({
    type: 'GET_RECIPES',
    payload: res.data.data,
  });
};

// Update recipe
export const updateRecipe = (recipeId, data) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await axios.put(`/api/recipes/${recipeId}`, data, config);

  const res = await axios.get(`/api/recipes`);

  dispatch({
    type: 'GET_RECIPES',
    payload: res.data.data,
  });
};
