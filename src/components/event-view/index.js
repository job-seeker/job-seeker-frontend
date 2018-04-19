import React, { Component } from 'react';
import './_event-view.scss';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';

import AddIcon from 'material-ui/svg-icons/content/add-circle';
import { amber800 } from 'material-ui/styles/colors';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import DashboardNav from '../dashboard-navbar';

export default class EventView extends Component {
  render() {
    return (
      <div>
        <DashboardNav />
        <div className='event-view'>
          <Subheader style={{ padding: 0 }} >Event</Subheader>
        
          <section className='event-info'>
            <h3>Event Info</h3>
            <IconButton 
              style={{ display: 'inline-block' }} 
              iconStyle={{ height: 15, width: 15 }}
            >
              <EditIcon />
            </IconButton>
            <Divider />
            
            <p><span>Title:</span> this.props.title</p>
            <p><span>Date:</span> this.props.date</p>
            <p><span>Notes:</span></p>
            <textarea readOnly/>
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            <IconButton>
              <AddIcon color={amber800} />
            </IconButton>
          </section>
        </div>
      </div>
    );
  }
}