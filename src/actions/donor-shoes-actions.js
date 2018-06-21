import superagent from 'superagent';
import * as routes from '../routes';

const donorShoesFetch = shoes => ({
  type: 'SHOES_DONOR_FETCH',
  payload: shoes,
});

const donorShoesCreate = shoes => ({
  type: 'SHOES_DONOR_CREATE',
  payload: shoes,
});

const donorShoesFetchRequest = () => (store) => {
  return superagent.get(`${API_URL}${routes.INPUT_ROUTE}`)
    .then((response) => {
      store.dispatch(donorShoesFetch(response.body));
      return response;
    });
};

const donorShoesCreateRequest = shoes => (store) => {
  return superagent.post(`${API_URL}${routes.INPUT_ROUTE}`)
    .send(shoes)
    .then((response) => {
      store.dispatch(donorShoesCreate(response.body));
      return response;
    });
};

export { donorShoesFetchRequest, donorShoesCreateRequest };
