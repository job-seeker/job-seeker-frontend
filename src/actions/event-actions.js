'use strict';

import superagent from 'superagent';

export const eventFetch = events => ({
  type: 'EVENT_FETCH',
  payload: events,
});

export const eventCreate = event => ({
  type: 'EVENT_CREATE',
  payload: event,
});

export const eventUpdate = event => ({
  type: 'EVENT_UPDATE',
  payload: event,
});

export const eventDelete = event => ({
  type: 'EVENT_DELETE',
  payload: event,
});

export const eventFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/events`) // probably need to fix these endpoints
    .then(res => {
      dispatch(eventFetch(res.body));
      return res;
    });
};

export const eventCreateRequest = (event) = dispatch => {
  return superagent.post(`${__API_URL__}/api/events`) // probably need to fix these endpoints
    .send(event)
    .then(res => {
      dispatch(eventCreate(res.body));
      return res;
    });
};

export const eventDeleteRequest = (event) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/event/${event._id}`) // probably need to fix these endpoints
    .then(res => {
      dispatch(eventDelete(event));
      return res;
    });
};