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
    default:
      return state;
  }
};
