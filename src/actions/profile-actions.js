import superagent from 'superagent';
import * as routes from '../routes';

const setProfile = profile => ({
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});

const createRequestProfile = profile => (store) => {
  const { token } = JSON.parse(store.getState().token);
  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const updateRequestProfile = profile => (store) => {
  const { token } = JSON.parse(store.getState().token);
  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const fetchRequestProfile = () => (store) => {
  const { token } = JSON.parse(store.getState().token);
  return superagent.get(`${API_URL}${routes.PROFILE_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

export { setProfile, createRequestProfile, updateRequestProfile, fetchRequestProfile };
