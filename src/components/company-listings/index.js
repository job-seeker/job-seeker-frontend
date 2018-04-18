import React from 'react';
import { connect } from 'react-redux';

import DashboardNav from '../dashboard-navbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import CompanyModal from '../company-modal/';
import { companyCreateRequest } from '../../actions/company-actions';

class CompanyListings extends React.Component {
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
    console.log(this.props.profile);
    return (
      <section className='dashboard-content'>
        <DashboardNav />
        <ListingTable 
          header='All Companies'
          column1='Company'
          column2='Website'
          column3='City'
          column4='Date Added'
          profile={this.props.profile}
        />

        <IconButton onClick={this.handleModalOpen}>
          <AddIcon />
        </IconButton>

        <CompanyModal 
          open={this.state.modalOpen}
          profile={this.props.profile}
          onComplete={this.props.companyCreate}
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
  companyCreate: (profile, company) => dispatch(companyCreateRequest(profile, company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyListings);