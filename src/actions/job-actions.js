'use strict';

import superagent from 'superagent';

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

export const jobFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/jobs`) // probably need to fix these endpoints
    .then(res => {
      dispatch(jobFetch(res.body));
      return res;
    });
};

export const jobCreateRequest = (job) = dispatch => {
  return superagent.post(`${__API_URL__}/api/jobs`) // probably need to fix these endpoints
    .send(job)
    .then(res => {
      dispatch(jobCreate(res.body));
      return res;
    });
};

export const jobDeleteRequest = (job) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/job/${job._id}`) // probably need to fix these endpoints
    .then(res => {
      dispatch(jobDelete(job));
      return res;
    });
};