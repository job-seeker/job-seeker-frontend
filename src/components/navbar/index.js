import React, { Component, Fragment } from 'react';
import ReactReduxAuth0 from '../auth-landing/component';
import { connect } from 'react-redux';
import { auth, token, profile } from '../auth-landing/constants';
import { createAction as act } from 'redux-actions';
import { Redirect, Link } from 'react-router-dom';
// const lock = require('../auth-landing/index.js');

import AppBar from 'material-ui/AppBar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import JSIcon from '../../assets/logo.png';
import './_navbar.scss';

// HELP ON THIS PAGE FROM:
// https://stackoverflow.com/questions/40495608/is-it-possible-to-set-up-material-ui-appbar-toolbar-to-have-a-horizontal-tab-men
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/36997691

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onAuthenticated = this.onAuthenticated.bind(this);
  }

  componentWillMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    let { props } = this;
    props.dispatch(act(auth.check)());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }
  onAuthenticated(token, profile) { //if loginResult is null, it's likely because a token was already set
    console.log(`Login token ${JSON.stringify(token)},\n\nProfile\n ${JSON.stringify(profile)}`);
  }

  render() {
    const DesktopNavLinks = () => (
      <ToolbarGroup>
        <FlatButton label='Sign Up' containerElement={<ReactReduxAuth0 onAuthenticated={this.onAuthenticated} signup auth0={auth} />} />
        <FlatButton label='Log In' containerElement={<ReactReduxAuth0 onAuthenticated={this.onAuthenticated} login auth0={auth} />} />
        <FlatButton label='About Us' containerElement={<Link to='/' />} />
      </ToolbarGroup>
    );

    const MobileNavLinks = () => {
      return <DropDownMenu 
        className='dropdown-nav'
        iconButton={<NavigationMenu />}>
        <MenuItem value={2} primaryText='Sign Up' containerElement={<ReactReduxAuth0 onAuthenticated={this.onAuthenticated} signup auth0={auth} />}  />
        <MenuItem value={3} primaryText='Log In' containerElement={<ReactReduxAuth0 onAuthenticated={this.onAuthenticated} login auth0={auth} />}/>
        <MenuItem value={4} primaryText='About Us' />
      </DropDownMenu>;
    };
    let { auth } = this.props;
    return (
      <nav>
        {this.state.screenWidth < 620 ?
          <AppBar 
            className='mobile-nav'
            title='Job Seeker'
            zDepth={0}
            iconElementLeft={<img src={JSIcon} />}
            iconElementRight={<MobileNavLinks />}
          />
          :
          <AppBar 
            title='Job Seeker'
            className='desktop-nav'
            zDepth={0}
            iconElementLeft={<img src={JSIcon} />}
            iconElementRight={<DesktopNavLinks />}
          />
        }
        
        
      </nav>
    );
  }
}

// let mapStateToProps = (state) => ({
//   auth : state,
// });

// let mapDispatchToProps = (dispatch) => ({
//   authCheck : auth => dispatch(authcheck())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default connect((state) => {
  let { auth } = state;
  return { auth };
})(NavBar);