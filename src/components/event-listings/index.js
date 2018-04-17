import React from 'react';
import { connect } from 'react-redux';

import DashboardNav from '../dashboard-navbar';
import EventFields from '../form-field/event-field';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import EventModal from '../event-modal';
import { eventCreateRequest } from '../../actions/event-actions';

class EventListings extends React.Component {
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

        <EventModal 
          open={this.state.modalOpen}
          onComplete={this.props.eventCreate}
          modalClose={this.handleModalClose}
        />
      </section>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  eventCreate: event => dispatch(eventCreateRequest(event)),
});

export default connect(null, mapDispatchToProps)(EventListings);