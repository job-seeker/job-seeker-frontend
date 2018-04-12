'use strict';

const reporter = store => next => action => {
  console.log('__ACTION IN REDUX REPORTER__', action);
  try {
    let result = next(action);
    console.log('__STATE IN REDUX REPORTER__', store.getState());
    return result;
  } catch (error) {
    error.action = action;
    console.error('__ERROR__', error);
    return error;
  }
};


export default reporter;