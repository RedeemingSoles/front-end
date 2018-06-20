const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'REQUEST_ITEM_CREATE':
      return [...state, payload];
    case 'REQUEST_ITEM_REMOVE':
      return state.filter(requestItem => requestItem.id !== payload.id);
    case 'REQUEST_ITEM_UPDATE':
      return state.map(requestItem => (requestItem.id === payload.id ? payload : requestItem));
    default:
      return state;
  }
};
