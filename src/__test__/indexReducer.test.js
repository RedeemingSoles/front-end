import indexReducer from '../reducers/index';

describe('Testing reducer in index', () => {
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
    expect(indexReducer(testState, testAction)).toEqual(testState);
  });
});
