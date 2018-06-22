import { fetchCookie } from '../utils/cookie';
import TOKEN_COOKIE_KEY from '../constants';

const token = fetchCookie(TOKEN_COOKIE_KEY);
const defaultState = token || null;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
