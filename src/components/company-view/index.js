import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleCompanyFetchRequest } from '../../actions/company-actions';

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
import JobModal from '../job-modal';
import EventModal from '../event-modal';
import ContactModal from '../contact-modal';
import CompanyModal from '../company-modal';

class CompanyView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      companyName: '',
      companyWebsite: '',
      cityState: '',
      companyNotes: '',
      created: '',
      jobModalOpen: false,
      contactModalOpen: false,
      eventModalOpen: false,
      companyModalOpen: false,
    };
    this.handleJobModalOpen = this.handleJobModalOpen.bind(this);
    this.handleJobModalClose = this.handleJobModalClose.bind(this);

    this.handleEventModalOpen = this.handleEventModalOpen.bind(this);
    this.handleEventModalClose = this.handleEventModalClose.bind(this);
    
    this.handleContactModalOpen = this.handleContactModalOpen.bind(this);
    this.handleContactModalClose = this.handleContactModalClose.bind(this);

    this.handleCompanyModalOpen = this.handleCompanyModalOpen.bind(this);
    this.handleCompanyModalClose = this.handleCompanyModalClose.bind(this);
  }
  handleJobModalOpen() {
    this.setState({ jobModalOpen: true });
  }

  handleJobModalClose() {
    this.setState({ jobModalOpen: false });
  }

  handleEventModalOpen() {
    this.setState({ eventModalOpen: true });
  }

  handleEventModalClose() {
    this.setState({ eventModalOpen: false });
  }

  handleContactModalOpen() {
    this.setState({ contactModalOpen: true });
  }

  handleContactModalClose() {
    this.setState({ contactModalOpen: false });
  }

  handleCompanyModalOpen() {
    this.setState({ companyModalOpen: true });
  }

  handleCompanyModalClose() {
    this.setState({ companyModalOpen: false });
  }

  componentWillMount() {
    this.props.companyFetch(this.props.profile, this.props.match.params.companyId)
      .then(res => {
        this.setState({
          companyName: res.body.companyName,
          website: res.body.website,
          cityState: res.body.cityState,
          companyNotes: res.body.companyNotes,
          created: res.body.created,
        });
      });
  }

  render() {
    return (
      <div>
        <DashboardNav />
        <div className='company-view'>
          <Subheader style={{ padding: 0 }}>{this.state.companyName}</Subheader>
        
          <section className='company-info'>
            <h3>Company Info</h3>
            <IconButton style={{ display: 'inline-block' }} onClick={this.handleCompanyModalOpen}>
              <EditIcon />
            </IconButton>

            <CompanyModal
              open={this.state.companyModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.handleCompanyModalClose}
            />
            
            <Divider />
            <p><span>Website:</span>{this.state.website}</p>
            <p><span>City, State:</span>{this.state.cityState}</p>
            <p><span>Created:</span>{this.state.created}</p>
            <p><span>Notes:</span></p>
            <textarea readOnly placeholder={this.state.companyNotes} />
          </section>

          <section className='company-job-postings'>
            <h3>Job Postings</h3>
            <Divider />

            <IconButton onClick={this.handleJobModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <JobModal 
              open={this.state.jobModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.handleJobModalClose}
            />
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            <IconButton onClick={this.handleEventModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <EventModal 
              open={this.state.eventModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.handleEventModalClose}
            />
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>
            <Divider />

            <IconButton onClick={this.handleContactModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <ContactModal 
              open={this.state.contactModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.handleContactModalClose}
            />
          </section>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
  profile: state.profile,
  company: state.company,
});

let mapDispatchToProps = (dispatch) => ({
  companyFetch: (profile, company) => dispatch(singleCompanyFetchRequest(profile, company)),
  // profileFetch: token => dispatch(profileFetchRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);