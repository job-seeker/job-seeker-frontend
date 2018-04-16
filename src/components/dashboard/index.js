import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { profileCreateRequest } from '../../actions/profile-actions';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ProfileIcon from 'material-ui/svg-icons/social/person';
import CompanyFields from '../form-field/company-field';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import './_dashboard.scss';
import Footer from '../footer';
import ListingTable from '../listing-table';
import AddModal from '../add-modal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drawerOpen: false,
      modalOpen: false,
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // componentDidMount() {
  //   this.props.profileCreate({
  //     name: 'Melanie',
  //     email: 'melaniebcohen@gmail.com',
  //     auth: this.props.auth,
  //   });
  // }

  handleModalOpen() {
    this.setState({ modalOpen: true });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  handleToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleClose() {
    this.setState({ drawerOpen: false });
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
      <section className='dashboard'>
        <AppBar 
          className='dashboard-nav'
          zDepth={0}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<ProfileIcon className='profile-icon' />}
        />

        <Drawer
          className='drawer'
          docked={false}
          width={175}
          open={this.state.drawerOpen}
          onRequestChange={drawerOpen => this.setState({ drawerOpen })}
          overlayStyle={{ 'background': 'none' }}
        >
          <MenuItem onClick={this.handleClose}><ArrowIcon /></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/dashboard'>Dashboard</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/companies'>Companies</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/jobs'>Job Applications</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/events'>Events</Link></MenuItem>
        </Drawer>

        <section className='dashboard-content'>
          <p>Content here</p>
          <ListingTable />

          <IconButton onClick={this.handleModalOpen}>
            <AddIcon />
          </IconButton>

          <AddModal 
            open={this.state.modalOpen}
            actions={actions} 
          />
        </section>
        <Footer />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
});

let mapDispatchToProps = (dispatch) => ({
  // userLogin: user => dispatch(signinRequest(user)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);