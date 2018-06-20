import { combineReducers } from 'redux';
import shoes from './shoes';
import token from './token';
import profile from './profile';
import requestItems from './request-item';

export default combineReducers({
  token, shoes, profile, requestItems,
});
