'use strict';

import superagent from 'superagent';

export const companyFetch = companies => ({
  type: 'COMPANY_FETCH',
  payload: companies,
});

export const companyCreate = company => ({
  type: 'COMPANY_CREATE',
  payload: company,
});

export const companyUpdate = company => ({
  type: 'COMPANY_UPDATE',
  payload: company,
});

export const companyDelete = company => ({
  type: 'COMPANY_DELETE',
  payload: company,
});

export const companyFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/company`) // probably need to fix these endpoints
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

<<<<<<< HEAD
export const companyCreateRequest = (company) = dispatch => {
  return superagent.post(`${__API_URL__}/api/profile/${profile._id}/company`) // probably need to fix these endpoints
=======
export const companyCreateRequest = (company) => dispatch => {
  return superagent.post(`${__API_URL__}/api/companies`) // probably need to fix these endpoints
>>>>>>> b11e96df4811400a1222a0b575ba13b9b0eb99e1
    .send(company)
    .then(res => {
      dispatch(companyCreate(res.body));
      return res;
    });
};

<<<<<<< HEAD
export const companyDeleteRequest = (company) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/profile/${profile._id}/${company._id}`) // probably need to fix these endpoints
=======
export const companyDeleteRequest = (company) => dispatch => {
  return superagent.delete(`${__API_URL__}/api/company/${company._id}`) // probably need to fix these endpoints
>>>>>>> b11e96df4811400a1222a0b575ba13b9b0eb99e1
    .then(res => {
      dispatch(companyDelete(company));
      return res;
    });
};