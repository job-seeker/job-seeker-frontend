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

export const singleCompanyFetchRequest = (profile, company) => dispatch => {
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/company/${company}`)
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

export const companyFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/company`)
    .then(res => {
      dispatch(companyFetch(res.body));
      return res;
    });
};

export const companyCreateRequest = (profile, company) => dispatch => {
  return superagent.post(`${__API_URL__}/api/profile/${profile._id}/createCompany`)
    .send(company)
    .then(res => {
      dispatch(companyCreate(res.body));
      return res;
    });
};

export const companyDeleteRequest = (company) => dispatch => {
  return superagent.delete(`${__API_URL__}/api/profile/${profile._id}/${company._id}`)
    .then(res => {
      dispatch(companyDelete(company));
      return res;
    });
};