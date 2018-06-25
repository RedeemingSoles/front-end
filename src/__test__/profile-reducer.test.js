import profileReducer from '../reducers/profile';

describe('Testing reducer in profile', () => {
  const testProfile = {
    organizationName: 'testCo',
    contactFirstName: 'John',
    contactLastName: 'Doe',
    title: 'Coach',
    phoneNumber: '(123) 456-7892',
    mailingAddress: '123 4th Ave',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98775',
    account: '15846465198',
  };
  test('#SET, should return a valid profile.', () => {
    const testAction = {
      type: 'CLIENT_PROFILE_SET',
      payload: testProfile,
    };
    expect(profileReducer(testProfile, testAction)).toEqual(testProfile);
  });
  test('#SET, should return an error for an invalid profile.', () => {
    const invalidProfile = {
      contactFirstName: 'John',
      contactLastName: 'Doe',
    };

    const testAction = {
      type: 'CLIENT_PROFILE_SET',
      payload: invalidProfile,
    };
    expect(() => profileReducer(invalidProfile, testAction)).toThrowError('Invalid profile information');
  });
  test('#TOKEN_REMOVE, should return null for a token removal.', () => {
    const testAction = {
      type: 'TOKEN_REMOVE',
    };
    expect(profileReducer(testProfile, testAction)).toBeNull();
  });
  test('#DEFAULT, should return the state for an unmatched case.', () => {
    const testAction = {
      type: 'TEST_ACTION',
    };
    expect(profileReducer(testProfile, testAction)).toEqual(testProfile);
  });
});
