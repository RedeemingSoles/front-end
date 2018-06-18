export default store => next => action => (
  typeof action === 'function'
    ? action(store.dispatch)
    : next(action)
);
