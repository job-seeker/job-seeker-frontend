import request from 'superagent';

import { profileCreate } from './profile-actions.js';

export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => ({
  type: 'auth_logout',
  payload: null,
});

export const signupRequest = (user) => (dispatch) => {
  return request.post(`${__API_URL__}/api/signup`)
    // .withCredentials()
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text));
      try {
        localStorage.jobSeekerToken = res.text;
      } catch(err) {
        console.error(err);
      }
      return res;
    });
};

export const signinRequest = (user) => (dispatch) => {
  return request.get(`${__API_URL__}/api/signin`)
    // .withCredentials()
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.jobSeekerToken = res.text;
      return;
    });
};

export const getAccessTokenAction = (email) =>  (dispatch) => {
  return request.post(`${__API_URL__}/api/handleAuth`)
    .send({ email })
    .then(({ body: { token, profile }}) => {
      dispatch(tokenSet(token));
      localStorage.jobSeekerToken = token;
      dispatch(profileCreate(profile));
      return;
    });
};