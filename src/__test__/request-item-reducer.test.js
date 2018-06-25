import requestItemReducer from '../reducers/request-item';

describe('request-item-reducer.test.js', () => {
  describe('Request-Item Reducer', () => {
    const testRequestItemState = {
      childName: 'Jane',
      shoeType: 'soccer cleats',
      age: 'youth',
      gender: 'female',
      shoeSize: '7',
      message: 'Great job Jane!',
      id: 'testid',
    };
    
    test('#CREATE, should return a valid request item.', () => {
      const testAction = {
        type: 'SHOES_DONOR_CREATE',
        payload: testRequestItemState,
      };
      expect(requestItemReducer(testRequestItemState, testAction)).toEqual(testRequestItemState);
    });
    test('#UPDATE, should return the updated request-item.', () => {
      const updateRequestItemState = {
        childName: 'Jane',
        shoeType: 'soccer cleats',
        age: 'youth',
        gender: 'female',
        shoeSize: '7',
        message: 'Great job Jane!',
        id: 'testid',
      };

      const testAction = {
        type: 'SHOES_DONOR_UPDATE',
        payload: updateRequestItemState,
      };
      expect(requestItemReducer(updateRequestItemState, testAction))
        .toEqual(updateRequestItemState);
    });
    test('#REMOVE, should return the removed request-item.', () => {
      const testAction = {
        type: 'SHOES_DONOR_REMOVE',
        payload: testRequestItemState,
      };
      expect(requestItemReducer(testRequestItemState, testAction)).toEqual(testRequestItemState);
    });
    test('#REMOVEALL, should remove all request items.', () => {
      const testAction = {
        type: 'SHOES_DONOR_REMOVEALL',
      };
      expect(requestItemReducer(testRequestItemState, testAction)).toEqual(testRequestItemState);
    });
    test('#DEFAULT, should return the state for an unmatched case.', () => {
      const testAction = {
        type: 'TEST_ACTION',
        payload: testRequestItemState,
      };
      expect(requestItemReducer(testRequestItemState, testAction)).toEqual(testRequestItemState);
    });
  });
});
