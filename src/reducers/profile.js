export const validateProfile = (profile) => {
  if (!profile) throw new Error('profile is required');
  console.log('here is a token ', profile);
  const {
    username,
    email,
    password,
  } = profile;

  if (!username || !email || !password) {
    throw new Error('invalid profile information');
  }
  console.log('this is reducers profile ', profile);
};

export default (state = null, { type, payload }) => {
  console.log('profile from profileJS', payload);
  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
