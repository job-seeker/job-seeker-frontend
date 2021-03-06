import React, { Fragment } from 'react';
import { auth } from './constants';
import { createAction as act } from 'redux-actions';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';
import { getAccessTokenAction } from '../../actions/user-auth-actions';
import { Redirect } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

class AuthComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = { redirectToNewPage: false };
    if(props.signup && props.login) throw new Error('You may only pass "signup" or "login".');
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  hide(){
    this.lock.hide();
  }

  mountAuth0(options={}){
    try {
      this.lock = new Auth0Lock(
        process.env.AUTH0_CLIENTID || 'Set process.env.AUTH0_CLIENTID', 
        process.env.AUTH0_DOMAIN || 'Set process.env.AUTH0_DOMAIN', 
        Object.assign({}, options, this.props.auth0)
      );

      this.lock.on('authenticated', (authResult) => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            console.error(error);
            return;
          }
          const method = this.props.signup ? 'signup' : 'login';
          this.finish(method, error, profile, authResult);
        });
      });
      return this.lock;
    } catch(e){
      console.log('auth0 mount error', e);
    }
  }

  componentDidMount(){
    const { props } = this;

    let auth0 = props.auth0 || {};
    let authSettings = auth0.auth || {};
    
    if (authSettings.redirect){ //Because redirect restarts browser memory, auth0 needs to be mounted again in redirect mode for on.authenticated callback handler to be reached
      this.mountAuth0();
    }
  }

  componentWillReceiveProps(nextProps){
    const { props } = this;
    const {onAuthenticated, auth} = nextProps;

    if(auth.token && !this.props.auth.token && nextProps.onAuthenticated){
      nextProps.onAuthenticated(auth.token, auth.profile);
    }
  }

  componentWillUnmount(){
    this.lock = null;
  }

  show(event, opts, cb){
    event.preventDefault();
    let auth0 = this.mountAuth0(opts);
    auth0.show(cb);
  }

  showLoginModal(event){
    this.show(event, {initialScreen: 'login'});
  }

  showSignupModal(event){
    this.show(event, {initialScreen: 'signUp'});
  }

  finish(method, err, profile, token){
    let { props } = this;
    let action;
    let obj;
    let newUser = false;

    if(method == 'login'){
      action = act(auth.signin);

    } else if(method == 'signup'){
      action = act(auth.signin);
      newUser = true;
    }

    if(err){
      action = act(auth.error);
      obj = { error: err };
    } else {
      obj = { profile, token, newUser };
    }

    props.dispatch(action(obj));
    props.dispatch(getAccessTokenAction(profile.email));
  }

  logout(){
    let { dispatch } = this.props;
    dispatch(act(auth.logout)());
  }

  render(){
    let { props } = this;

    return (
      <Fragment>
        {props.auth.token || props.token
          ? <FlatButton style={{ 'textTransform': 'uppercase', 'fontSize': 14, 'fontWeight': '500'  }} className='auth-sign-out' onClick={this.logout}>Logout</FlatButton>
          : <FlatButton style={{ 'textTransform': 'uppercase', 'fontSize': 14, 'fontWeight': '500' }} className='auth-sign-in' onClick={this.showSignupModal}>Sign In</FlatButton>
        }
      </Fragment>
    );
  }
}

AuthComponent.defaultProps = {
  auth0: {
    auth: {
      redirect: false,
    },
  },
};

let mapStateToProps = (state) => {
  let { auth, token } = state;
  return { auth, token };
};

export default connect(mapStateToProps, null)(AuthComponent);