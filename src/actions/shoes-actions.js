import superagent from 'superagent';

const shoesFetch = shoes => ({
  type: 'SHOES_FETCH',
  payload: shoes,
});

const shoesCreate = shoes => ({
  type: 'SHOES_CREATE',
  payload: shoes,
});

const shoesFetchRequest = () => (store) => {
  return superagent.get(`${API_URL}/shoes`)
    .then((response) => {
      store.dispatch(shoesFetch(response.body));
      return response;
    });
};

const shoesCreateRequest = shoes => (store) => {
  return superagent.post(`${API_URL}/shoes`)
    .send(shoes)
    .then((response) => {
      store.dispatch(shoesCreate(response.body));
      return response;
    });
};

export { shoesFetchRequest, shoesCreateRequest };
