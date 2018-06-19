import superagent from 'superagent';

const donorShoesFetch = shoes => ({
  type: 'SHOES_DONOR_FETCH',
  payload: shoes,
});

const donorShoesCreate = shoes => ({
  type: 'SHOES_DONOR_CREATE',
  payload: shoes,
});

const donorShoesUpdate = shoes => ({
  type: 'SHOES_DONOR_UPDATE',
  payload: shoes,
});

const donorShoesDelete = shoes => ({
  type: 'SHOES_DONOR_DELETE',
  payload: shoes,
});

const donorShoesFetchRequest = () => (store) => {
  return superagent.get(`${API_URL}/donorShoes`)
    .then((response) => {
      store.dispatch(donorShoesFetch(response.body));
      return response;
    });
};

const donorShoesCreateRequest = shoes => (store) => {
  console.log(shoes);
  return superagent.post(`${API_URL}/donorShoes`)
    .send(shoes)
    .then((response) => {
      store.dispatch(donorShoesCreate(response.body));
      return response;
    });
};

const donorShoesUpdateRequest = shoes => (store) => {
  return superagent.put(`${API_URL}/donorShoes/${shoes._id}`)
    .send(shoes)
    .then((response) => {
      store.dispatch(donorShoesUpdate(response.body));
      return response;
    });
};

const donorShoesDeleteRequest = shoes => (store) => {
  return superagent.delete(`${API_URL}/donorShoes/${shoes._id}`)
    .then((response) => {
      store.dispatch(donorShoesDelete(shoes));
      return response;
    });
};

export { 
  donorShoesDeleteRequest, donorShoesFetchRequest, 
  donorShoesUpdateRequest, donorShoesCreateRequest,
};
