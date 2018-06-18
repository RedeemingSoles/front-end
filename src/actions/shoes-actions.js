import superagent from 'superagent';

const shoesFetch = shoes => ({
  type: 'SHOES_FETCH',
  payload: shoes,
});

const shoesCreate = shoes => ({
  type: 'SHOES_CREATE',
  payload: shoes,
});

const shoesUpdate = shoes => ({
  type: 'SHOES_UPDATE',
  payload: shoes,
});

const shoesDelete = shoes => ({
  type: 'SHOES_DELETE',
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

const shoesUpdateRequest = shoes => (store) => {
  return superagent.put(`${API_URL}/shoes/${shoes._id}`)
    .send(shoes)
    .then((response) => {
      store.dispatch(shoesUpdate(response.body));
      return response;
    });
};

const shoesDeleteRequest = shoes => (store) => {
  return superagent.delete(`${API_URL}/shoes/${shoes._id}`)
    .then((response) => {
      store.dispatch(shoesDelete(shoes));
      return response;
    });
};

export { shoesDeleteRequest, shoesFetchRequest, shoesUpdateRequest, shoesCreateRequest };
// TODO: check here for issue with export