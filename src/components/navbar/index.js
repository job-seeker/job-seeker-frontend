import React, { Component, Fragment } from 'react';
import AuthComponent from '../auth-landing/component';
import { connect } from 'react-redux';
import { auth, token, profile } from '../auth-landing/constants';
import { createAction as act } from 'redux-actions';
import { Redirect, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import AboutModal from '../modals/about-modal.js';

import JSIcon from '../../assets/logo.png';
import './_navbar.scss';

// HELP ON THIS PAGE FROM:
// https://stackoverflow.com/questions/40495608/is-it-possible-to-set-up-material-ui-appbar-toolbar-to-have-a-horizontal-tab-men
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/36997691

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      screenWidth: 0, 
      modalOpen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    this.setState({ modalOpen: true });
  }

  handleModalClose() {
    this.setState({ modalOpen: false });
  }

  componentWillMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    let { props } = this;
    props.dispatch(act(auth.check)());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    const DesktopNavLinks = () => (
      <ToolbarGroup>
        <AuthComponent />

        <FlatButton 
          label='About Us' 
          className='about-us-button'
          onClick={this.handleModalOpen}
        />
        
      </ToolbarGroup>
    );

    const MobileNavLinks = () => {
      return <DropDownMenu 
        className='dropdown-nav'
        iconButton={<NavigationMenu />}>
        <AuthComponent className='auth-sign-in' />

        <MenuItem 
          style={{ 'text-align': 'center', 'textTransform': 'uppercase', 'fontSize': 14, 'font-weight': '500'  }}
          value={4} 
          primaryText='About Us' 
          onClick={this.handleModalOpen}
        />
      </DropDownMenu>;
    };

    let { auth } = this.props;

    return (
      <nav>
        {this.state.screenWidth < 620 ?
          <AppBar 
            className='mobile-nav'
            title='Job Seeker'
            zDepth={0}
            iconElementLeft={<img src={JSIcon} />}
            iconElementRight={<MobileNavLinks />}
          />
          :
          <AppBar 
            title='Job Seeker'
            className='desktop-nav'
            zDepth={0}
            iconElementLeft={<img src={JSIcon} />}
            iconElementRight={<DesktopNavLinks />}
          />
        }
        <AboutModal
          open={this.state.modalOpen}
          profile={this.props.profile}
          onComplete={this.props.companyCreate}
          modalClose={this.handleModalClose}
        />
      </nav>
    );
  }
}

let mapStateToProps = (state) => {
  let { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, null)(NavBar);