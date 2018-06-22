import donorShoesReducer from '../reducers/donor-shoes';

describe('Testing reducer in donor-shoes', () => {
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
    expect(donorShoesReducer(testState, testAction)).toEqual(testState);
  });
});
