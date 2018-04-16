import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from '../navbar';

import './_homepage.scss';

export default class HomePage extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <section className='homepage'>
        <NavBar />
        <RaisedButton primary={true} label='Hello world' />
        <div className="container">
          {
            isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
          }
          {
            !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
          }
        </div>
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);