export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'TOKEN_SET':
    // console.log(payload)
    return payload;
  case 'auth_logout':
    return null;
  default:
    return state;
  }
};