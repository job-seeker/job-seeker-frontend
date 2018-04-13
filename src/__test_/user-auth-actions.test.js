import superagent from 'superagent';

const randomNum = max => {
  return Math.floor(Math.random() * max);
}

const mockUser = {
  username: `usertest${randomNum(5000)}`,
  email: `emailtest${randomNum(5000)}@email.com`,
  password: 'a1b2c3d4e5'
}

describe('Auth Actions', () => {
  let tempUser;

  test('should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toBeTruthy();
    expect(action.payload.token).toBe('12345');
  });

  test('should return a LOGOUT action', () => {
    let action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    })
  });
});