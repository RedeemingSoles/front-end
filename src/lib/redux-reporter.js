export default store => next => (action) => {
  try {
    const result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch (error) {
    action.error = error;
    return action;
  }
};
