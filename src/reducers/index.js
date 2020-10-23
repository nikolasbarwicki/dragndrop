import { combineReducers } from 'redux';
import columns from './columns';
import recipes from './recipes';

export default combineReducers({
  columns,
  recipes,
});
