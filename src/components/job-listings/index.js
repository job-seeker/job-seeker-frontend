import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import JobModal from '../job-modal';
import CompanyModal from '../company-modal';
import { jobCreateRequest } from '../../actions/job-actions';
import { amber800 } from 'material-ui/styles/colors';

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
        <ListingTable 
          style={{ 'padding-bottom': '20px' }}
          header='All Jobs'
          column1='Job'
          column2='Company'
          column3='Application Status'
          column4='Date Added'
          profile={this.props.profile}
        />

        {/* <IconButton 
          style={{ marginLeft: 12 }}
          iconStyle={{ height: 35, width: 35 }}
          className='add-icon' 
          onClick={this.handleModalOpen}>
          <AddIcon color={amber800} />
        </IconButton> */}

        <JobModal 
          open={this.state.modalOpen}
          profile={this.props.profile}
          onComplete={this.props.jobCreate}
          modalClose={this.handleModalClose}
        />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  jobCreate: (job, company) => dispatch(jobCreateRequest(job, company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobListings);