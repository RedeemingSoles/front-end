const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'REQUEST_ITEM_CREATE':
      return [...state, payload];
    case 'REQUEST_ITEM_REMOVEALL':
      return defaultState;
    case 'REQUEST_ITEM_REMOVE':
      return state.filter(requestItem => requestItem.id !== payload.id);
    case 'REQUEST_ITEM_UPDATE':
      return state.map(requestItem => (requestItem.id === payload.id ? payload : requestItem));
    default:
      return state;
  }
};
