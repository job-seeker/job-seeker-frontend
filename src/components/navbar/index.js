import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import JSIcon from '../../assets/logo.png';
import './_navbar.scss';

// HELP ON THIS PAGE FROM:
// https://stackoverflow.com/questions/40495608/is-it-possible-to-set-up-material-ui-appbar-toolbar-to-have-a-horizontal-tab-men
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/36997691

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0 };
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
    const DesktopNavLinks = () => (
      <ToolbarGroup>
        <FlatButton label='Sign Up' containerElement={<Link to='/' />} />
        <FlatButton label='Sign In' containerElement={<Link to='/' />} />
        <FlatButton label='About Us' containerElement={<Link to='/' />} />
      </ToolbarGroup>
    );

    const MobileNavLinks = () => {
      return <DropDownMenu 
        className='dropdown-nav' 
        iconButton={<NavigationMenu />}>
        <MenuItem value={2} primaryText='Sign Up' />
        <MenuItem value={3 }primaryText='Sign In' />
        <MenuItem value={4} primaryText='About Us' />
      </DropDownMenu>;
    };

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
            zDepth={0}
            iconElementLeft={<img src={JSIcon} />}
            iconElementRight={<DesktopNavLinks />}
          />
        }
      </nav>
    );
  }
}

// let mapStateToProps = (state) => ({
  
// });

// let mapDispatchToProps = (dispatch) => ({
 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);