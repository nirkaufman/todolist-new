export const logger = (store) => (next) => (action) => {

  const currentStateBeforeAction = store.getState();
  const dispatchedAction = action;  

  next(action);

  const currentStateAfterAction = store.getState();

  console.group('LOGGER');
  console.log(`ACTION`, dispatchedAction)
  console.log(`PRE STATE:`, currentStateBeforeAction)
  console.log(`NEXT STATE:`,currentStateAfterAction)
  console.groupEnd()
}