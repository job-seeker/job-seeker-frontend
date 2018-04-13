'use strict';

const validateCompany = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: company must have an id');
  }
  if (!payload.companyName) {
    throw new Error('VALIDATION ERROR: company must have company name');
  }
};


export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'COMPANY_FETCH':
    return payload;
  case 'COMPANY_CREATE':
    validateCompany(payload);
    return [payload, ...state];
  case 'COMPANY_UPDATE':
    validateCompany(payload);
    return state.map(item => item._id === payload._id ? payload: item);
  case 'COMPANY_DELETE':
    validateCompany(payload);
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
