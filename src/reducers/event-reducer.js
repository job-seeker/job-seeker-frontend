'use strict';

const validateEvent = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: list must have an id');
  }
  if (!payload.eventType) {
    throw new Error('VALIDATION ERROR: list must have type');
  }
};


export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'EVENT_FETCH':
    return payload;
  case 'EVENT_CREATE':
    validateEvent(payload);
    return [payload, ...state];
  case 'EVENT_UPDATE':
    validateEvent(payload);
    return state.map(item => item._id === payload._id ? payload: item);
  case 'EVENT_DELETE':
    validateEvent(payload);
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
