import { combineReducers } from 'redux';
import alert from './alert';
import recipes from './recipes';
import editRecipe from './editRecipe';

export default combineReducers({
  alert,
  recipes,
  editRecipe,
});
