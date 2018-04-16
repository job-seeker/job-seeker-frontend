export default (state=null, action) => {
  let {type, payload} = action;

  
  switch(type) {
  case 'PROFILE_CREATE':
    return {...state, ...payload};
  case 'PROFILE_UPDATE':
    return {...state, ...payload};
  case 'LOGOUT': 
    return null;
  default:
    return state;
  }
};