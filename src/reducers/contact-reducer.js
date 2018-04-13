'use strict';

const validateContact = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: list must have an id');
  }
  if (!payload.name) {
    throw new Error('VALIDATION ERROR: list must have name');
  }
};


export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'CONTACT_FETCH':
    return payload;
  case 'CONTACT_CREATE':
    validateContact(payload);
    return [payload, ...state];
  case 'CONTACT_UPDATE':
    validateContact(payload);
    return state.map(item => item._id === payload._id ? payload: item);
  case 'CONTACT_DELETE':
    validateContact(payload);
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
