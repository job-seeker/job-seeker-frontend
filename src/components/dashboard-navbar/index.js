import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileFetchRequest } from '../../actions/profile-actions';
import { auth_logout } from '../../actions/user-auth-actions';

import { createAction as act } from 'redux-actions';
import { auth } from '../auth-landing/constants';;

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import LogoutButton from 'material-ui/svg-icons/action/power-settings-new';
import HomePage from '../homepage';

import './_dashboard-navbar.scss';

class DashboardNav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drawerOpen: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleLogout() {
    localStorage.clear();
    this.props.logout();  
    this.props.history.push('/');
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      this.props.location.pathname !== '/'
        ? <section className='dashboard-nav'>
          <AppBar 
            className='dashboard-nav'
            zDepth={0}
            title='Job Seeker'
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={<IconButton><LogoutButton /></IconButton>}
            onRightIconButtonClick={this.handleLogout}
          />

          <Drawer
            className='drawer'
            docked={false}
            width={175}
            open={this.state.drawerOpen}
            onRequestChange={drawerOpen => this.setState({ drawerOpen })}
            overlayStyle={{ 'background': 'none' }}
          >
            <MenuItem onClick={this.handleClose}><ArrowIcon /></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to='/dashboard'>Dashboard</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to='/companies'>Companies</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to='/jobs'>Job Applications</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to='/events'>Events</Link></MenuItem>
          </Drawer>
        </section>
        : null
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
});

let mapDispatchToProps = (dispatch) => ({
  profileFetch: token => dispatch(profileFetchRequest(token)),
  // auth_logout: token => dispatch(auth_logout()),
  tokenDelete: token => dispatch(tokenDelete(token)),
  logout: () => dispatch(act(auth.logout)()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);