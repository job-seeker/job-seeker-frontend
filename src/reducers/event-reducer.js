'use strict';

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'EVENT_FETCH':
    return payload;
  case 'EVENT_CREATE':
    return [payload, ...state];
  case 'EVENT_UPDATE':
    return state.map(item => item._id === payload._id ? payload: item);
  case 'EVENT_DELETE':
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
