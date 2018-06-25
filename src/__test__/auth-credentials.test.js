import authCredentialsReducer from '../reducers/auth-credentials';

describe('Testing reducer in donor-shoes', () => {
  const testState = {
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
  test('testing the state', () => {
    const testAction = {
      type: 'AUTH_CRED_SET',
      payload: testState,
    };
    console.log('AUTH_REDUCER', testState);
    expect(authCredentialsReducer(testState, testAction)).toEqual(testState);
  });
});
