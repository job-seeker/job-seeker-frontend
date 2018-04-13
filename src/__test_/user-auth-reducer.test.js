import userAuthReducer from '../reducer/user-auth-reducer.js';

describe('Auth Reducer', () => {
  test('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });

  test('the state should be returned if no action type is present', () => {
    let state = { username: 'testusername', email: 'testuser@email.net', password: 'a1b2c3d4e5' };
    let result = authReducer(state, {type: null});
    expect(result).toEqual(state);
  });
});