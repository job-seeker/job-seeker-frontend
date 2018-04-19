import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import MobileListingTable from '../mobile-listing-table';
import { jobCreateRequest } from '../../actions/job-actions';
import { amber800 } from 'material-ui/styles/colors';

class JobListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 0, 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
  
  render() {
    return (
      <section className='dashboard-content'>
        {this.state.screenWidth < 620 
          ? <MobileListingTable 
            style={{ 'padding-bottom': '20px' }}
            header='All Jobs'
            column1='Job'
            column2='Company'
            profile={this.props.profile}
          />
          : <ListingTable 
            style={{ 'padding-bottom': '20px' }}
            header='All Jobs'
            column1='Job'
            column2='Company'
            column3='Application Status'
            column4='Date Added'
            profile={this.props.profile}
          />
        }
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  // jobCreate: (job, company) => dispatch(jobCreateRequest(job, company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobListings);