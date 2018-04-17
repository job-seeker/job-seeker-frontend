import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

import DashboardNav from '../dashboard-navbar';
import ListingTable from '../listing-table';
import CompanyModal from '../company-modal';

export default class EventListings extends Component {
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
        <ListingTable />

        <IconButton onClick={this.handleModalOpen}>
          <AddIcon />
        </IconButton>

        <CompanyModal 
          open={this.state.modalOpen}
          actions={actions} 
        />

        {/* <EventSelector />
        <JobStatusSelector /> */}
      </section>
    );
  }
}