export const validateShoes = (payload) => {
  if (!payload._id) {
    throw new Error('Validation error, no id');
  }

  if (!payload.shoeType || !payload.gender || !payload.age || !payload.shoeSize) {
    throw new Error('Missing required properties');
  }
};

export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SHOES_FETCH':
      return payload;
    case 'SHOES_CREATE':
      validateShoes(payload);
      return [payload, ...state];
    case 'SHOES_UPDATE':
      validateShoes(payload);
      return state.map(shoes => (shoes._id === payload._id ? payload : shoes));
    case 'SHOES_DELETE':
      validateShoes(payload);
      return state.filter(shoes => shoes._id !== payload._id);
    default:
      return state;
  }
};
