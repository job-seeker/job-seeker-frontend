import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import Footer from '../footer';

export default class DashboardNav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drawerOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    return (
      <section className='dashboard-nav'>
        <AppBar 
          className='dashboard-nav'
          zDepth={0}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<ProfileIcon className='profile-icon' />}
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

        <Footer />
      </section>
    );
  }
}