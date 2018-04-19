import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileFetchRequest } from '../../actions/profile-actions';
import EventSelector from '../select-field/event-select-field';
import JobStatusSelector from '../select-field/job-status-field';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

// import './_dashboard.scss';
import CompanyModal from '../modals/company-modal.js';
import CompanyListings from '../company-listings';
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

  componentWillMount() {
    let localToken = localStorage.jobSeekerToken;
    if (localToken) {
      this.props.profileFetch(localToken);
    }
  }

  handleModalOpen() {
    this.setState({ modalOpen: true });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <Fragment>
        <CompanyListings />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
});

let mapDispatchToProps = (dispatch) => ({
  profileFetch: token => dispatch(profileFetchRequest(token)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);