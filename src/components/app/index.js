import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import { signinRequest } from '../../actions/user-auth-actions.js';
import { profileCreateRequest } from '../../actions/profile-actions';

import HomePage from '../homepage';
import Dashboard from '../dashboard';
import './_app.scss';
import AuthRedirect from '../auth-redirect';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='routes'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/' component={AuthRedirect} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// let mapStateToProps = (state) => ({

// });

let mapDispatchToProps = (dispatch) => ({
  userLogin: user => dispatch(signinRequest(user)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
});

export default connect(null, mapDispatchToProps)(App);