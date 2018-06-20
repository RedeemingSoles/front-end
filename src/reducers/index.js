import { combineReducers } from 'redux';
import shoes from './shoes';
import token from './token';
import profile from './profile';
import requestItems from './request-item';
import orders from './order';

export default combineReducers({
  token, shoes, profile, requestItems, orders,
});
