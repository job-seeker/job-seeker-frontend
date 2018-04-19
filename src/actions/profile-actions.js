import request from 'superagent';

export const profileCreate = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile,
});

export const profileUpdate = (profile) => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
});

export const profileCreateRequest = (profile) => (dispatch, getState) => {
  let { token } = getState();

  return request.post(`${__API_URL__}/api/profile`)
    .set('Authorization', `Bearer ${token}`)
    .send(profile)
    .then(res => {
      dispatch(profileCreate(res.body));
      return res;
    });
};

export const profileFetchRequest = (token) => (dispatch, getState) => {
  let { token } = getState();
  return request.get(`${__API_URL__}/api/profile`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(profileCreate(res.body));
      return res;
    });
};