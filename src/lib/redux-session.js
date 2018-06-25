export default store => next => (action) => {
  const result = next(action);
  const state = store.getState();

  for (const key in state) { //eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      localStorage[key] = JSON.stringify(state[key]);
    }
  }
  return result;
};
