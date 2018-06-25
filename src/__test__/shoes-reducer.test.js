import shoesReducer from '../reducers/shoes';

describe('Testing reducer in shoes', () => {
  const testState = {
    shoeType: 'testShoeType',
    gender: 'testGender',
    age: 'testAge',
    shoes: 'testShoes',
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
