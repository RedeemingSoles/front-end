import reducers from '../reducers';

test('reducers', () => {
  const state = reducers(undefined, {});
  expect(state).toEqual({
    token: null,
    shoes: null,
    profile: null,
    requestItems: [],
    orders: [],
  });
});

test('token within reducers', () => {
  const state = reducers({
    token: null,
    shoes: null,
    profile: null,
    requestItems: [],
    orders: [],
  }, {
    type: 'TOKEN_SET',
    payload: '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiJjNWZiZjIwY2' +
    'EwYjYwY2M1ODcyOTIwYmJhYmYyNzA4NDA0YzY2ZWFiNDBjNDBhYzJiZmQ0ODk3NjlmN2NmYWU1YWVlZWM1MDFi' +
    'OWU0NWU1NWExYzEzYjk1N2I1ZGVlZTM5YzA1OTBiOWE0Mzc2MTQ3MTliMzU4ZTg5Njk5YTZjNmY3Yjk3M2MxMjI' +
    '3MDJhMTc3ODgyZWE0ZDgyMzYwMjdmNDVhOWEyNjQ2YTllMDMxMzNiNGUyNzE4YTQ2MjZiMjE5YzMzZmYwYzNmMGE' +
    '2OGQ2YzY4Y2FmMzU4NDIwYTY1ZDI0M2I3MWZmYzYwNjk3NzgzOThlNTdmMWI2OTRmY2UxIiwiaWF0IjoxNTI5NjQ2' +
    'MTg1fQ.Mx-xD2OwHde5xGGU7epyqP5P9MEg08UhIKo2qHWr2So","isAdmin":true}',
  });
  expect(state).toEqual({
    token: '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZ' +
    'WQiOiJjNWZiZjIwY2EwYjYwY2M1ODcyOTIwYmJhYmYyNzA4NDA0YzY2ZWFiNDBjNDBhY' +
    'zJiZmQ0ODk3NjlmN2NmYWU1YWVlZWM1MDFiOWU0NWU1NWExYzEzYjk1N2I1ZGVlZTM5Yz' +
    'A1OTBiOWE0Mzc2MTQ3MTliMzU4ZTg5Njk5YTZjNmY3Yjk3M2MxMjI3MDJhMTc3ODgyZWE0Z' +
    'DgyMzYwMjdmNDVhOWEyNjQ2YTllMDMxMzNiNGUyNzE4YTQ2MjZiMjE5YzMzZmYwYzNmMGE2OGQ' +
    '2YzY4Y2FmMzU4NDIwYTY1ZDI0M2I3MWZmYzYwNjk3NzgzOThlNTdmMWI2OTRmY2UxIiwiaWF0Ijox' +
    'NTI5NjQ2MTg1fQ.Mx-xD2OwHde5xGGU7epyqP5P9MEg08UhIKo2qHWr2So","isAdmin":true}',
    shoes: null,
    profile: null,
    requestItems: [],
    orders: [],
  });
});

test('Testing reducers with client info and 1 order', () => {
  const state = reducers(
    {
      token: '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiJm' +
    'NjhiYTk0ZjYxZDM2MjI0YmU4OThjOTFmNTg4Y2Q2ZWJmZDQyNDBkNTAwZjg0OGE4MGU2N2U5YW' +
    'VkNTBjYWE3YzczNDM4ZTdmODY4ODFjNjRjNDg0OTM1ZmU3N2NhYjRiNzVmOGQ2NWI5Y2I4ODE1' +
    'NzQ2MGFjMGVhMDg2ZWFlODI1NmI3NWU0NzhjYmQwY2M2ZmQwNWRlN2M5MDgzNDZlMzQyY2QwNjI5' +
    'YTE0ZTdhYzA5Yzk2NzBlZWMyZjVhNjgwZWU2YzUyZmFiYTE0MjlkYmY0YzU1ZjVhNTMyOTI5Mzdl' +
    'MmViZmVkM2RhZDJkY2QzNDlhNmFlNTVkZDk1ZjU3IiwiaWF0IjoxNTI5NjQ5MTcyfQ.gEW1CJwQaQ' +
    'tOp-k4ltZmDuQcVl-y3hiQhoKXxCoTGx4","isAdmin":true}',
      shoes: null,
      profile: {
        clientRequests: [],
        _id: '5b2c542eaf594a00140cd088',
        organizationName: 'BELLEVUE EAST LITTLE LEAGUE',
        contactFirstName: 'Joshua',
        contactLastName: 'Fredrickson',
        title: 'UMPIRE',
        phoneNumber: '4257491970',
        mailingAddress: '3045 20th AVE W',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98199',
        country: 'United States',
        account: '5b2c4d23c381e100141dde6b',
        __v: 0,
      },
      requestItems: [],
      orders: [],
    },
    {
      type: 'SHOES_DONOR_CREATE',
      payload: {
        _id: '5b2c98408b768e00142f60a8',
        shoeType: 'Baseball',
        age: 'Youth',
        gender: 'Male',
        shoeSize: 6.5,
        donor: 'YOU',
        receivedDate: '2018-06-22T06:33:36.909Z',
        __v: 0,
      }, 
    },
  );
  expect(state).toEqual({
    token: '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl' +
    'NlZWQiOiJmNjhiYTk0ZjYxZDM2MjI0YmU4OThjOTFmNTg4Y2Q2ZWJmZDQyNDBkNT' +
    'AwZjg0OGE4MGU2N2U5YWVkNTBjYWE3YzczNDM4ZTdmODY4ODFjNjRjNDg0OTM1ZmU3' +
    'N2NhYjRiNzVmOGQ2NWI5Y2I4ODE1NzQ2MGFjMGVhMDg2ZWFlODI1NmI3NWU0NzhjYm' +
    'QwY2M2ZmQwNWRlN2M5MDgzNDZlMzQyY2QwNjI5YTE0ZTdhYzA5Yzk2NzBlZWMyZjVhN' +
    'jgwZWU2YzUyZmFiYTE0MjlkYmY0YzU1ZjVhNTMyOTI5MzdlMmViZmVkM2RhZDJkY2Q' +
    'zNDlhNmFlNTVkZDk1ZjU3IiwiaWF0IjoxNTI5NjQ5MTcyfQ.gEW1CJwQaQtOp-k4lt' +
    'ZmDuQcVl-y3hiQhoKXxCoTGx4","isAdmin":true}',
    shoes: null,
    profile: {
      clientRequests: [],
      _id: '5b2c542eaf594a00140cd088',
      organizationName: 'BELLEVUE EAST LITTLE LEAGUE',
      contactFirstName: 'Joshua',
      contactLastName: 'Fredrickson',
      title: 'UMPIRE',
      phoneNumber: '4257491970',
      mailingAddress: '3045 20th AVE W',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98199',
      country: 'United States',
      account: '5b2c4d23c381e100141dde6b',
      __v: 0,
    },
    requestItems: [],
    orders: [],
  });
});
