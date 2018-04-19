import React from 'react';
import { connect } from 'react-redux';
import { companyCreateRequest } from '../../actions/company-actions';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

import './_company-listings.scss';
import ListingTable from '../listing-table';
import {CompanyModal} from '../modals/company-modal.js';
import { amber800 } from 'material-ui/styles/colors';

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
    return (
      <section className='dashboard-content'>        
        <ListingTable 
          style={{ 'padding-bottom': '20px' }}
          header='All Companies'
          column1='Company'
          column2='Website'
          column3='City'
          column4='Date Added'
          profile={this.props.profile}
        />

        <IconButton 
          style={{ marginLeft: 12 }}
          iconStyle={{ height: 35, width: 35 }}
          className='add-icon' 
          onClick={this.handleModalOpen}>
          <AddIcon color={amber800} />
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
  token: state.token,
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  companyCreate: (profile, company) => dispatch(companyCreateRequest(profile, company)),
  profileFetch: token => dispatch(profileFetchRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyListings);