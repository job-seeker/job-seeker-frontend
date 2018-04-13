'use strict';

const validateJob = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: list must have an id');
  }
  if (!payload.title) {
    throw new Error('VALIDATION ERROR: list must have title');
  }
};


export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'JOB_FETCH':
    return payload;
  case 'JOB_CREATE':
    validateJob(payload);
    return [payload, ...state];
  case 'JOB_UPDATE':
    validateJob(payload);
    return state.map(item => item._id === payload._id ? payload: item);
  case 'JOB_DELETE':
    validateJob(payload);
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
