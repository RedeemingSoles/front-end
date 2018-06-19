export const validateDonorShoes = (payload) => {
  if (!payload._id) {
    throw new Error('Validation error, no id');
  }

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
    case 'SHOES_DONOR_UPDATE':
      validateDonorShoes(payload);
      return state.map(donorShoes => (donorShoes._id === payload._id ? payload : donorShoes));
    case 'SHOES_DONOR_DELETE':
      validateDonorShoes(payload);
      return state.filter(donorShoes => donorShoes._id !== payload._id);
    default:
      return state;
  }
};
