import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { profileCreateRequest } from '../../actions/profile-actions';
import EventSelector from '../select-field/event-select-field';
import JobStatusSelector from '../select-field/job-status-field';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import CompanyFields from '../form-field/company-field';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import './_dashboard.scss';
import CompanyModal from '../company-modal';
import ListingTable from '../listing-table';
import DashboardNav from '../dashboard-navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalOpen: false,
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    this.setState({ modalOpen: true });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleModalClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onClick={this.handleModalClose}
      />,
    ];

    return (
      <section className='dashboard-content'>
        <DashboardNav />
        <p>Content here</p>
        <ListingTable />

        <IconButton onClick={this.handleModalOpen}>
          <AddIcon />
        </IconButton>

        <CompanyModal 
          open={this.state.modalOpen}
          actions={actions} 
        />

        <EventSelector />
        <JobStatusSelector />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
});

let mapDispatchToProps = (dispatch) => ({
  // userLogin: user => dispatch(signinRequest(user)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);