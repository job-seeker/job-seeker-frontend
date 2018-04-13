'use strict';

import superagent from 'superagent';

export const eventFetch = events => ({
  type: 'PROFILE_FETCH',
  payload: profiles,
});

export const profileCreate = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile,
});

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
});

export const profileDelete = profile => ({
  type: 'PROFILE_DELETE',
  payload: profile,
});

export const profileFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/profiles`) // probably need to fix these endpoints
    .then(res => {
      dispatch(profileFetch(res.body));
      return res;
    });
};

export const profileCreateRequest = (profile) = dispatch => {
  return superagent.post(`${__API_URL__}/api/profiles`) // probably need to fix these endpoints
    .send(profile)
    .then(res => {
      dispatch(profileCreate(res.body));
      return res;
    });
};

export const profileDeleteRequest = (profile) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/profile/${profile._id}`) // probably need to fix these endpoints
    .then(res => {
      dispatch(profileDelete(profile));
      return res;
    });
};