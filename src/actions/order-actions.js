import superagent from 'superagent';
import * as routes from '../routes';

export const createOrder = order => ({
  type: 'ORDER_FORM_CREATE',
  payload: order,
});

export const submitAllItems = order => (store) => {
  const { token } = JSON.parse(store.getState().token);

  return superagent.post(`${API_URL}${routes.ORDER_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(order)
    .then((response) => {
      return store.dispatch(createOrder(response.body));
    });
};
