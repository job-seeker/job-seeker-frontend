import React from 'react';
import { connect } from 'react-redux';

import DashboardNav from '../dashboard-navbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import JobModal from '../job-modal';
import { jobCreateRequest } from '../../actions/job-actions';

class JobListings extends React.Component {
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
    return (
      <section className='dashboard-content'>
        <DashboardNav />
        <ListingTable />

        <IconButton onClick={this.handleModalOpen}>
          <AddIcon />
        </IconButton>

        <JobModal 
          open={this.state.modalOpen}
          onComplete={this.props.jobCreate}
          modalClose={this.handleModalClose}
        />
      </section>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  jobCreate: job => dispatch(jobCreateRequest(job)),
});

export default connect(null, mapDispatchToProps)(JobListings);