import React from 'react';
import { connect } from 'react-redux';
import { companyCreateRequest, companyDeleteRequest } from '../../actions/company-actions';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import { amber800 } from 'material-ui/styles/colors';

import './_company-listings.scss';
import ListingTable from '../listing-table';
import MobileListingTable from '../mobile-listing-table';
import CompanyModal from '../modals/company-modal.js';

class CompanyListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      screenWidth: 0, 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentWillMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
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
        {this.state.screenWidth < 620 
          ? <MobileListingTable 
            style={{ 'padding-bottom': '20px' }}
            header='All Companies'
            column1='Company'
            column2='Website'
            column3=''
            profile={this.props.profile}
          />
          : <ListingTable 
            style={{ 'padding-bottom': '20px' }}
            header='All Companies'
            column1='Company'
            column2='Website'
            column3='City'
            column4='Date Added'
            column5=''
            profile={this.props.profile}
          />
        }
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
          companyNameHintText='Add a company'
          websiteHintText='Add a website'
          cityStateHintText='Add city and state'
          companyNotesHintText='Add company notes'
          companyId=''
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