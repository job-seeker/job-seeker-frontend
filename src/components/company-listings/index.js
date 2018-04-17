import React from 'react';
import DashboardNav from '../dashboard-navbar';
import CompanyFields from '../form-field/company-field';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import ListingTable from '../listing-table';
import AddModal from '../add-modal/';


export default class CompanyListings extends React.Component {
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

        <AddModal 
          open={this.state.modalOpen}
          actions={actions} 
        />

        {/* <EventSelector />
        <JobStatusSelector /> */}
      </section>
    );
  }
}
