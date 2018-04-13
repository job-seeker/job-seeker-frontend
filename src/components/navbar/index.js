import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

// This is a placeholder icon...
import SearchIcon from 'material-ui/svg-icons/action/youtube-searched-for';

// let NavLink = (props) => (
//   <li className='nav-bar' >
//     <Link to={App}>
//       {props.route}
//     </Link>
//   </li>
// );

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/36997691
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
    const NavLinks = () => (
      <ToolbarGroup>
        <FlatButton label='Sign Up' containerElement={<Link to='dashboard' />} />
        <FlatButton label='Sign In' containerElement={<Link to='dashboard' />} />
        <FlatButton label='About Us' containerElement={<Link to='dashboard' />} />
      </ToolbarGroup>
    );

    return (
      <Fragment>
        {this.state.screenWidth < 620 ?
          <AppBar 
            title='Job Seeker'
            zDepth={0}
            iconElementRight={<IconButton><NavigationMenu /></IconButton>}
            iconElementLeft={<IconButton><SearchIcon /></IconButton>}
          />
          :
          <AppBar 
            title='Job Seeker'
            zDepth={0}
            iconElementLeft={<IconButton><SearchIcon /></IconButton>}
            iconElementRight={<NavLinks />}
          />
        }
      </Fragment>
    );
  }
}

// let mapStateToProps = (state) => ({
  
// });

// let mapDispatchToProps = (dispatch) => ({
 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);