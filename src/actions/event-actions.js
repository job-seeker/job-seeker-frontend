'use strict';

import superagent from 'superagent';

export const eventFetch = events => ({
  type: 'EVENT_FETCH',
  payload: events,
});

export const eventCreate = jobEvent => ({
  type: 'EVENT_CREATE',
  payload: jobEvent,
});

export const eventUpdate = jobEvent => ({
  type: 'EVENT_UPDATE',
  payload: jobEvent,
});

export const eventDelete = jobEvent => ({
  type: 'EVENT_DELETE',
  payload: jobEvent,
});

export const eventFetchRequest = () => (dispatch, getState) => {
  let { token } = getState();
  return superagent.get(`${__API_URL__}/api/profile/${profile._id}/allProfileEvents`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(eventFetch(res.body));
      return res;
    });
};

export const eventCreateRequest = (company, jobEvent) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/event`)
    .set('Authorization', `Bearer ${token}`)
    .send(jobEvent)
    .then(res => {
      dispatch(eventCreate(res.body));
      return res;
    });
};

export const eventUpdateRequest = (company, jobEvent) => (dispatch, getState) => {
  let { token } = getState();

  console.log(company)
  console.log(jobEvent)

  return superagent.put(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/event/${jobEvent._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(jobEvent)
    .then(res => {
      dispatch(eventUpdate(res.body));
      return res;
    });
};

export const eventDeleteRequest = (jobEvent) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.delete(`${__API_URL__}/api/profile/${jobEvent.profileId}/company/${jobEvent.companyId}/event/${jobEvent._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(eventDelete(jobEvent));
      return res;
    });
};