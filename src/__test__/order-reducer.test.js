import orderReducer from '../reducers/order';

describe('Testing reducer in order', () => {
  const testState = {
    shoes: 'nope',
  };
  test('testing the state', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(orderReducer(testState, testAction)).toEqual(testState);
  });
});
