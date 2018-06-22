import profileReducer from '../reducers/profile';

describe('Testing reducer in profile', () => {
  const testState = {
    organizationName: 'nope',
    contactFirstName: 'nope',
    contactLastName: 'nope',
    title: 'nope',
  };
  test('testing the state', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(profileReducer(testState, testAction)).toEqual(testState);
  });
});
