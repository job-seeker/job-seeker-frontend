'use strict';

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'CONTACT_FETCH':
    return payload;
  case 'CONTACT_CREATE':
    return [payload, ...state];
  case 'CONTACT_UPDATE':
    return state.map(item => item._id === payload._id ? payload: item);
  case 'CONTACT_DELETE':
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
