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


export const contactCreateRequest = (contact) = dispatch => {
  return superagent.post(`${__API_URL__}/api/profile/${profile._id}/company/${company._id}/contact`) // probably need to fix these endpoints
    .send(contact)
    .then(res => {
      dispatch(contactCreate(res.body));
      return res;
    });
};

export const contactDeleteRequest = (contact) = dispatch => {
  return superagent.delete(`${__API_URL__}/api/profile/${profile._id}/company/${company._id}/contact/${contact._id}`) // probably need to fix these endpoints
    .then(res => {
      dispatch(contactDelete(contact));
      return res;
    });
};