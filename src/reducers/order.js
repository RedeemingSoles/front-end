const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'ORDER_FORM_CREATE':
      return [...state, payload];
    default:
      return state;
  }
};
