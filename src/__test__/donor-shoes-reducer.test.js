import donorShoesReducer from '../reducers/donor-shoes';

describe('Testing reducer in donor-shoes', () => {
  const testShoesState = {
    shoeType: 'soccer cleats',
    age: 'youth',
    gender: 'female',
    shoeSize: '7',
    donor: 'Test Donor',
    error: null,
  };

  test('#FETCH, should return a valid pair of shoes.', () => {
    const testAction = {
      type: 'SHOES_DONOR_FETCH',
      payload: testShoesState,
    };
    expect(donorShoesReducer(testShoesState, testAction)).toEqual(testShoesState);
  });
  test('#CREATE, should push a valid pair of shoes into the shoes array.', () => {
    const testAction = {
      type: 'SHOES_DONOR_CREATE',
      payload: testShoesState,
    };
    expect(donorShoesReducer(testShoesState, testAction)).toEqual([testShoesState]);
  });
  test('#CREATE, should throw an error for an invalid pair of shoes.', () => {
    const invalidShoesState = {
      age: 'youth',
      gender: 'female',
      shoeSize: '7',
      donor: 'Test Donor',
      error: null,
    };

    const testAction = {
      type: 'SHOES_DONOR_CREATE',
      payload: invalidShoesState,
    };
    expect(() => donorShoesReducer(invalidShoesState, testAction)).toThrowError('Missing required properties');
  });
  test('#DEFAULT, should return the state for an unmatched case.', () => {
    const testAction = {
      type: 'TEST_ACTION',
      payload: testShoesState,
    };
    expect(donorShoesReducer(testShoesState, testAction)).toEqual(testShoesState);
  });
});
