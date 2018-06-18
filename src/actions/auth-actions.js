import superagent from 'superagent';
import * as routes from '../routes';
import { deleteCookie } from '../utils/cookie';
import { TOKEN_COOKIE_KEY } from '../constants';

export const setToken = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
});

export const logout = () => {
  deleteCookie(TOKEN_COOKIE_KEY);
  return removeToken();
};

export const signUpRequest = user => (store) => {
  return superagent.post(`${API_URL}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then((response) => {
      return store.dispatch(setToken(response.text));
    });
};

export const loginRequest = user => (store) => {
  return superagent.get(`${API_URL}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then((response) => {
      return store.dispatch(setToken(response.text));
    });
};