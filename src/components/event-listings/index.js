import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import MobileListingTable from '../mobile-listing-table';
import { eventCreateRequest } from '../../actions/event-actions';
import { amber800 } from 'material-ui/styles/colors';

class EventListings extends React.Component {
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
        {this.state.screenWidth < 620                   ? <MobileListingTable 
          style={{ 'padding-bottom': '20px' }}
          header='All Events'
          column1='Event'
          column2='Company'
          profile={this.props.profile}
        />
          : <ListingTable 
            style={{ 'padding-bottom': '20px' }}
            header='All Events'
            column1='Event'
            column2='Company'
            column3='Event Date'
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
  // eventCreate: event => dispatch(eventCreateRequest(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventListings);