import { combineReducers } from 'redux';
import shoes from './shoes';
import token from './token';

export default combineReducers({
  token, shoes,
});
