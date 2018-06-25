export const validateDonorShoes = (payload) => {
  if (!payload.shoeType || !payload.age || !payload.gender || !payload.shoeSize) {
    throw new Error('Missing required properties');
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SHOES_DONOR_FETCH':
      return payload;
    case 'SHOES_DONOR_CREATE':
      validateDonorShoes(payload);
      return [payload, ...state];
    default:
      return state;
  }
};
