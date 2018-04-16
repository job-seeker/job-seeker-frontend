import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowIcon from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import './_dashboard.scss';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <section className='dashboard'>
        <NavigationMenu  
          label='open'
          onClick={this.handleToggle} 
        />

        <Drawer 
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          overlayStyle={{ 'background': 'none' }}
        >
          <MenuItem onClick={this.handleClose}><ArrowIcon /></MenuItem>
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Companies</MenuItem>
          <MenuItem onClick={this.handleClose}>Job Applications</MenuItem>
          <MenuItem onClick={this.handleClose}>Events</MenuItem>
        </Drawer>
      </section>
    );
  }
}