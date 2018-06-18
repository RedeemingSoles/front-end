import { combineReducers } from 'redux';
import shoes from './shoes';
import token from './token';
import profile from './profile';

export default combineReducers({
  token, shoes, profile,
});
