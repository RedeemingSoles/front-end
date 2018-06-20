import uuid from 'uuid/v4';

const create = ({ 
  shoeType, age, gender, shoeSize, donor,
}) => ({
  type: 'REQUEST_ITEM_CREATE',
  payload: {
    shoeType,
    age,
    gender,
    shoeSize,
    donor,
    id: uuid(),
  },
});

const update = requestItem => ({
  type: 'REQUEST_ITEM_UPDATE',
  payload: requestItem,
});

const remove = requestItem => ({
  type: 'REQUEST_ITEM__REMOVE',
  payload: requestItem,
});

export { create, update, remove };
