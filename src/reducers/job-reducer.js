'use strict';

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'JOB_FETCH':
    return payload;
  case 'JOB_CREATE':
    return [payload, ...state];
  case 'JOB_UPDATE':
    return state.map(item => item._id === payload._id ? payload: item);
  case 'JOB_DELETE':
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
