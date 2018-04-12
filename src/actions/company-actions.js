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
  return superagent.get(`${__API_URL__}/api/companies`) // probably need to fix these endpoints
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

export const companyCreateRequest = (company) = dispatch => {
  return superagent.post(`${__API_URL__}/api/companies`) // probably need to fix these endpoints
    .send(company)
    .then(res => {
      dispatch(companyCreate(res.body));
      return res;
    });
};

export const companyDeleteRequest = (company) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/company/${company._id}`) // probably need to fix these endpoints
    .then(res => {
      dispatch(companyDelete(company));
      return res;
    });
};