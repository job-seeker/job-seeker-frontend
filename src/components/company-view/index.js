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

import './_company-view.scss';
import DashboardNav from '../dashboard-navbar';

export default class CompanyView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     companyName: '',
  //     companyWebsite: '',
  //     companyAddress: '',
  //     companyNotes: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <DashboardNav />
        <div className='company-view'>
          <Subheader style={{ padding: 0 }} >{this.props.name}</Subheader>
        
          <section className='company-info'>
            <h3>Company Info</h3>
            <IconButton style={{ display: 'inline-block' }} >
              <EditIcon />
            </IconButton>
            <Divider />
            <p><span>Website:</span> this.props.website</p>
            <p><span>Address:</span> this.props.address</p>
            <p><span>Phone:</span> this.props.phone</p>
            <p><span>Notes:</span></p>
            <textarea readOnly/>
          </section>

          <section className='company-job-postings'>
            <h3>Job Postings</h3>
            <Divider />

            <IconButton>
              <AddIcon color={amber800} />
            </IconButton>
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            <IconButton>
              <AddIcon color={amber800} />
            </IconButton>
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>
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