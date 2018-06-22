import requestItemReducer from '../reducers/request-item';

describe('Testing reducer in request-item', () => {
  const testState = {
    orders: [],
    profile: null,
    requestItems: [],
    shoes: null,
    token: null,
  };
  test('testing the state', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(requestItemReducer(testState, testAction)).toEqual(testState);
  });
});
