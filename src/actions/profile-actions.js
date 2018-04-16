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
  let { auth } = getState();
  return request.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${auth}`)
    .field('name', profile.name)
    .field('email', profile.email)
    .then(res => {
      dispatch(profileCreate(res.body));
      return res;
    });
};