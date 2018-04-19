'use strict';

import superagent from 'superagent';
import { profile } from '../components/auth-landing/constants';
import { companyCreate } from './company-actions';

export const jobFetch = jobs => ({
  type: 'JOB_FETCH',
  payload: jobs,
});

export const jobCreate = job => ({
  type: 'JOB_CREATE',
  payload: job,
});

export const jobUpdate = job => ({
  type: 'JOB_UPDATE',
  payload: job,
});

export const jobDelete = job => ({
  type: 'JOB_DELETE',
  payload: job,
});

export const jobFetchRequest = () => (dispatch, getState) => {
  let { token } = getState();
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/allProfileJobs`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(jobFetch(res.body));
      return res;
    });
};

export const jobUpdateRequest = (company, job) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.put(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/job/${job._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(job)
    .then(res => {
      dispatch(jobUpdate(res.body));
      return res;
    });
};

export const jobCreateRequest = (company, job) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/job`)
    .set('Authorization', `Bearer ${token}`)
    .send(job)
    .then(res => {
      dispatch(jobCreate(res.body));
      return res;
    });
};

export const jobDeleteRequest = (company, job) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.delete(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/job/${job._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(jobDelete(job));
      return res;
    });
};