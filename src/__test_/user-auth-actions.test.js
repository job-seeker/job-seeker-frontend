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

  test('signupRequest should return a token', done => {
    superagent.post(`http://localhost:3000/signup`)
    .send(mockUser)
    .end((err, res) => {
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      tempUser = mockUser;
      console.log('signup:::', tempUser);
      done();
    });
  });

  test('loginRequest should return a token', done => {
    superagent.get(`http://localhost:3000/login`)
    .auth(tempUser.username, tempUser.password)
    .end((err, res) => {
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      console.log('login::::', tempUser);
      done();
    });
  });
});