import uuid from 'uuid/v4';

const create = ({ 
  childName, shoeType, age, gender, shoeSize, message,
}) => ({
  type: 'REQUEST_ITEM_CREATE',
  payload: {
    childName,
    shoeType,
    age,
    gender,
    shoeSize,
    message,
    id: uuid(),
  },
});

const update = requestItem => ({
  type: 'REQUEST_ITEM_UPDATE',
  payload: requestItem,
});

const remove = requestItem => ({
  type: 'REQUEST_ITEM_REMOVE',
  payload: requestItem,
});

const removeAll = () => ({
  type: 'REQUEST_ITEM_REMOVEALL',
});

export { create, update, remove, removeAll };
