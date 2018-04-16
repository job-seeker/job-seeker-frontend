import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileCreateRequest } from '../../actions/profile-actions';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';

import './_dashboard.scss';
import Footer from '../footer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.profileCreate({
      name: 'Melanie',
      email: 'melaniebcohen@gmail.com',
      auth: this.props.auth,
    });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <section className='dashboard'>
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
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          overlayStyle={{ 'background': 'none' }}
        >
          <MenuItem onClick={this.handleClose}><ArrowIcon /></MenuItem>
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Companies</MenuItem>
          <MenuItem onClick={this.handleClose}>Job Applications</MenuItem>
          <MenuItem onClick={this.handleClose}>Events</MenuItem>
        </Drawer>

        <section className='dashboard-content'>
          <p>Content here</p>
        </section>
        <Footer />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
});

let mapDispatchToProps = (dispatch) => ({
  userLogin: user => dispatch(signinRequest(user)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);