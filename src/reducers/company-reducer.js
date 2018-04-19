'use strict';

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'COMPANY_FETCH':
    return payload;
  case 'COMPANY_CREATE':
    return {payload, ...state};
  case 'COMPANY_UPDATE':
    return state.map(item => item._id === payload._id ? payload: item);
  case 'COMPANY_DELETE':
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
