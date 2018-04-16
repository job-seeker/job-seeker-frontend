import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
// import { signinRequest } from '../../actions/user-auth-actions.js';
import { profileCreateRequest } from '../../actions/profile-actions';

import HomePage from '../homepage';
import Dashboard from '../dashboard';
import './_app.scss';

class App extends Component {
  // componentWillMount() {
  //   // request to backend to log in with username and password.
  //   this.props.userLogin({
  //     username: 'mbc',
  //     password: '123abc',
  //   });
  // }


  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='routes'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dashboard' component={Dashboard} />
            {/* <Route exact path='/companies' component={} />
            <Route exact path='/jobs' component={} />
            <Route exact path='/events' component={} /> */}
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