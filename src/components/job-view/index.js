import React, { Component } from 'react';

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
import JobStatusSelector from '../select-field/job-status-field';

export default class JobView extends Component {
  render() {
    return (
      <div>
        <DashboardNav />
        <div className='job-view'>
          <Subheader style={{ padding: 0 }} >Job Application</Subheader>
        
          <section className='job-info'>
            <h3>Event Info</h3>
            <IconButton style={{ display: 'inline-block' }} >
              <EditIcon />
            </IconButton>
            <Divider />
            <JobStatusSelector />
            <p><span>Title:</span> this.props.title</p>
            <p><span>Link:</span> this.props.link</p>
            <p><span>Type:</span> this.props.type</p>
            <p><span>Notes:</span></p>
            <textarea readOnly/>
          </section>

          <section className='company-upcoming-jobs'>
            <h3>Upcoming Jobs</h3>
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