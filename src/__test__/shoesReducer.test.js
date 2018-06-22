import shoesReducer from '../reducers/shoes';

describe('Testing reducer in shoes', () => {
  const testState = {
    shoeType: null,
    gender: null,
    age: null,
    shoes: null,
    _id: 11111111,
  };
  test('testing the state', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(shoesReducer(testState, testAction)).toEqual(testState);
  }); 
});
