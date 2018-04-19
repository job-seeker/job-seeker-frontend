'use strict';

import superagent from 'superagent';

export const contactFetch = contacts => ({
  type: 'CONTACT_FETCH',
  payload: contacts,
});

export const contactCreate = contact => ({
  type: 'CONTACT_CREATE',
  payload: contact,
});

export const contactUpdate = contact => ({
  type: 'CONTACT_UPDATE',
  payload: contact,
});

export const contactDelete = contact => ({
  type: 'CONTACT_DELETE',
  payload: contact,
});


export const contactCreateRequest = (company, contact) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.post(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/contact`) // probably need to fix these endpoints
    .set('Authorization', `Bearer ${token}`)
    .send(contact)
    .then(res => {
      dispatch(contactCreate(res.body));
      return res;
    });
};

export const contactDeleteRequest = (company, contact) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.delete(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/contact/${contact._id}`) // probably need to fix these endpoints
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(contactDelete(contact));
      return res;
    });
};