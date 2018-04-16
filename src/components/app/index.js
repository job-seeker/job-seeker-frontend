import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import { connect } from 'react-redux';
import Auth from '../Auth/Auth.js';
import HomePage from '../homepage';
import Dashboard from '../dashboard';
import './_app.scss';


const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export default class App extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='routes'>
            <Route exact path='/' render={(props) => <HomePage auth={auth} {...props} />} />
            {/* <Route exact path='/dashboard' component={Dashboard} /> */}
            <Route path="/dashboard" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/" />
              ) : (
                  <Dashboard auth={auth} {...props} />
                )
            )} />
            {/* <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }} />        */}
            {/* <Route exact path='/' component={} />
            <Route exact path='/' component={} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// let mapStateToProps = (state) => ({

// });

// let mapDispatchToProps = (dispatch) => ({
  
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);