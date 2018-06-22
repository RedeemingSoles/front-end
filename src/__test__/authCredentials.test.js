import authCredentialsReducer from '../reducers/auth-credentials';

describe('Testing reducer in donor-shoes', () => {
  const testState = {
    shoes: null,
    shoesType: null,
  };
  test('testing the state', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(authCredentialsReducer(testState, testAction)).toEqual(testState);
  });
});
