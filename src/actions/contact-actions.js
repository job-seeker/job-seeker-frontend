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
  return superagent.post(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/contact`) 
    .set('Authorization', `Bearer ${token}`)
    .send(contact)
    .then(res => {
      dispatch(contactCreate(res.body));
      return res;
    });
};

export const contactUpdateRequest = (company, contact) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.put(`${__API_URL__}/api/profile/${company.profileId}/company/${company._id}/contact/${contact._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(contact)
    .then(res => {
      dispatch(contactUpdate(res.body));
      return res;
    });
};

export const contactDeleteRequest = (contact) => (dispatch, getState) => {
  let { token } = getState();
  return superagent.delete(`${__API_URL__}/api/profile/${contact.profileId}/company/${contact.companyId}/contact/${contact._id}`) 
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(contactDelete(contact));
      return res;
    });
};