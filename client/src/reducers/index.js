import { combineReducers } from 'redux';
import recipes from './recipes';
import editRecipe from './editRecipe';

export default combineReducers({
  recipes,
  editRecipe,
});
