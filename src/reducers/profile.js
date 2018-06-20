export const validateProfile = (profile) => {
  if (!profile) throw new Error('profile is required');
  const {
    organizationName,
    contactFirstName,
    contactLastName,
    title,
    phoneNumber,
    mailingAddress,
    city,
    state,
    zipCode,
    account,
  } = profile;

  if (!organizationName || !contactFirstName || !contactLastName || !title ||
    !phoneNumber || !mailingAddress || !city || !state || !zipCode || !account) {
    throw new Error('invalid profile information');
  }
};

export default (state = null, { type, payload }) => {
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
