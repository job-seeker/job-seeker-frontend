import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AuthRedirect extends Component {
  render() {
    return (
      <div>
        {this.props.location.pathname === '/dashboard'
          ? this.props.token
            ? null
            : <Redirect to='/' />
          : null
        }

        {this.props.location.pathname === '/'
          ? this.props.token
            ? <Redirect to='/dashboard' />
            : null
          : null
        }

      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(AuthRedirect);