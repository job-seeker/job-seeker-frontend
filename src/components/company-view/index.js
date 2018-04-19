import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { singleCompanyFetchRequest } from '../../actions/company-actions';
import { jobCreateRequest } from '../../actions/job-actions';
import { eventCreateRequest } from '../../actions/event-actions';

import Dialog from 'material-ui/Dialog';
import TextField from  'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import { List, ListItem } from 'material-ui/List';
import { amber800 } from 'material-ui/styles/colors';

import './_company-view.scss';
import DashboardNav from '../dashboard-navbar';
import JobModal from '../job-modal';
import EventModal from '../event-modal';
import ContactModal from '../contact-modal';
import CompanyModal from '../company-modal';
import JobView from '../job-view';

class CompanyView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
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

  render() {
    const company = this.props.profile.companies.filter(company => 
      company._id === this.props.match.params.companyId
    )[0];

    return (
      <div>
        <DashboardNav />
        <div className='company-view'>
          <Subheader 
            style={{ padding: 0 }}
          >{company.companyName}</Subheader>
        
          <section className='company-info'>
            <h3>Company Info</h3>
            <IconButton 
              style={{ display: 'inline-block' }}
              iconStyle={{ height: 15, width: 15 }} 
              onClick={this.handleCompanyModalOpen}>
              <EditIcon />
            </IconButton>

            <CompanyModal
              open={this.state.companyModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.handleCompanyModalClose}
            />
            
            <Divider />
            <p><span>Website:</span>{company.website}</p>
            <p><span>City, State:</span>{company.cityState}</p>
            <p><span>Created:</span>{new Date(company.created).toDateString()}</p>
            <p><span>Notes:</span></p>
            <textarea readOnly placeholder={company.companyNotes} />
          </section>

          <section className='company-job-postings'>
            <h3>Job Postings</h3>
            <Divider />

            {company.jobPosting
              ? <List>
                {company.jobPosting.map(companyJob => 
                  <ListItem
                    containerElement={
                      <Link to={'/job/'+companyJob._id}>
                        <JobView />
                      </Link>
                    }
                    key={companyJob._id} 
                    primaryText={companyJob.title} 
                    rightIconButton={<IconButton iconStyle={{ height: 15, width: 15 }}><EditIcon /></IconButton>}
                  />                )}
              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.handleJobModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <JobModal 
              open={this.state.jobModalOpen}
              company={company}
              onComplete={this.props.jobCreate}
              modalClose={this.handleJobModalClose}
            />
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            {company.events
              ? <List>
                {company.events.map(event => 
                  <ListItem 
                    // key={companyJob._id} 
                    // primaryText={companyJob.title} 
                    rightIconButton={<IconButton iconStyle={{ height: 15, width: 15 }}><EditIcon /></IconButton>}
                  />
                )}
              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.handleEventModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <EventModal 
              open={this.state.eventModalOpen}
              onComplete={this.props.eventCreate}
              modalClose={this.handleEventModalClose}
            />
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>
            <Divider />

            {company.contacts
              ? <List>
                {company.contacts.map(contact => 
                  <ListItem 
                    // key={companyJob._id} 
                    // primaryText={companyJob.title} 
                    rightIconButton={<IconButton iconStyle={{ height: 15, width: 15 }}><EditIcon /></IconButton>}
                  />
                )}
              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.handleContactModalOpen}>
              <AddIcon color={amber800}/>
            </IconButton>

            <ContactModal 
              open={this.state.contactModalOpen}
              onComplete={this.props.contactCreate}
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
});

let mapDispatchToProps = (dispatch) => ({
  companyFetch: (profile, company) => dispatch(singleCompanyFetchRequest(profile, company)),
  jobCreate: (company, job) => dispatch(jobCreateRequest(company, job)),
  eventCreate: (company, event) => dispatch(eventCreateRequest(company, event)),
  contactCreate: (company, contact) => dispatch(contactCreateRequest(company, contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);