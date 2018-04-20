import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { singleCompanyFetchRequest, companyDeleteRequest } from '../../actions/company-actions';
import { jobCreateRequest, jobDeleteRequest, jobUpdateRequest } from '../../actions/job-actions';
import { eventCreateRequest, eventDeleteRequest, eventUpdateRequest } from '../../actions/event-actions';
import { contactCreateRequest, contactDeleteRequest, contactUpdateRequest } from '../../actions/contact-actions';

import Dialog from 'material-ui/Dialog';
import TextField from  'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import { amber800, lightBlue900 } from 'material-ui/styles/colors';

import './_company-view.scss';
import JobModal from '../modals/job-modal.js';
import JobViewModal from '../modals/job-view-modal';
import EventModal from '../modals/event-modal.js';
import EventViewModal from '../modals/event-view-modal';
import ContactModal from '../modals/contact-modal.js';
import ContactViewModal from '../modals/contact-view-modal.js';
import CompanyModal from '../modals/company-modal.js';
import JobView from '../job-view';
import EventView from '../event-view';
import ContactView from '../contact-view';

class CompanyView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobModalOpen: false,
      jobViewModalOpen: false,
      contactModalOpen: false,
      eventModalOpen: false,
      eventViewModalOpen: false,
      companyModalOpen: false,
      contactViewModalOpen: false,
      contact: {
        name: '',
        email: '',
        phone: '',
      },
      event: {
        eventTitle: '',
        eventType: '',
        eventDate: new Date(),
        eventNotes: '',
      },
      job: { 
        title: '',
        link: '',
        type: '',
        notes: '',
        status: 'None Selected',
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal(modalName) {
    return () => {
      this.setState(prevState => ({
        [modalName]: !prevState[modalName],
      })
      );
    };
  }
  handleContactClick(contact) {
    return () => {
      this.toggleModal('contactViewModalOpen')();
      this.setState({ contact : contact });
    };
  }

  handleEventClick(event) {
    return() => {
      this.toggleModal('eventViewModalOpen')();
      this.setState({ event: event });
    };
  }

  handleJobClick(job) {
    return() => {
      this.toggleModal('jobViewModalOpen')();
      this.setState({ job: job });
    };
  }
  
  render() {
    const company = this.props.profile.companies.filter(company => 
      company._id === this.props.match.params.companyId
    )[0];

    return (
      <div>
        <div className='company-view'>
          <Subheader 
            style={{ padding: 0 }}
          >{company.companyName}</Subheader>
        
          <section className='company-info'>
            <h3>Company Info</h3>
            <IconButton 
              style={{ display: 'inline-block' }}
              iconStyle={{ height: 15, width: 15 }} 
              onClick={this.toggleModal('companyModalOpen')}>
              <EditIcon />
            </IconButton>

            <CompanyModal
              open={this.state.companyModalOpen}
              onComplete={this.props.jobCreate}
              modalClose={this.toggleModal('companyModalOpen')}
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
                {company.jobPosting.map(job => 
                  <ListItem
                    key={job._id} 
                    onClick={this.handleJobClick(job)}
                    primaryText={job.title} 
                    rightIconButton={
                      <IconButton style={{ width: 80 }} iconStyle={{ 'margin-right': 10, height: 15, width: 15 }}>
                        <EditIcon className='edit-icon' onClick={() => this.props.jobUpdate(job)} />
                        <DeleteIcon className='delete-icon' onClick={() => this.props.jobDelete(job)} />
                      </IconButton>
                    }
                  />
                )}
              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.toggleModal('jobModalOpen')}>
              <AddIcon color={amber800}/>
            </IconButton>

            <JobModal 
              open={this.state.jobModalOpen}
              company={company}
              onComplete={this.props.jobCreate}
              modalClose={this.toggleModal('jobModalOpen')}
            />

            <JobViewModal 
              open={this.state.jobViewModalOpen}
              job={this.state.job}
              modalClose={this.toggleModal('jobViewModalOpen')}
            />
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            {company.events
              ? <List>
                {company.events.map(event => 
                  <ListItem 
                    key={event._id}
                    primaryText={event.eventTitle} 
                    rightIconButton={
                      <IconButton style={{ width: 80 }} iconStyle={{ 'margin-right': 10, height: 15, width: 15 }}>
                        <EditIcon className='edit-icon' onClick={() => this.props.eventUpdate(event)} />
                        <DeleteIcon className='delete-icon' onClick={() => this.props.eventDelete(event) />
                      </IconButton>
                    }
                  />
                )}
              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.toggleModal('eventModalOpen')}>
              <AddIcon color={amber800}/>
            </IconButton>

            <EventModal 
              open={this.state.eventModalOpen}
              company={company}
              onComplete={this.props.eventCreate}
              modalClose={this.toggleModal('eventModalOpen')}
            />

            <EventViewModal 
              open={this.state.eventViewModalOpen}
              event={this.state.event}
              modalClose={this.toggleModal('eventViewModalOpen')}
            />
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>
            <Divider />

            {company.contacts
              ? <List>
                {company.contacts.map(contact => 
                  <ListItem 
                    key={contact._id} 
                    onClick={this.handleContactClick(contact)}
                    primaryText={contact.name}
                    rightIconButton={
                      <IconButton style={{ width: 80 }} iconStyle={{ 'margin-right': 10, height: 15, width: 15 }}>
                        <EditIcon className='edit-icon' onClick={() => this.props.contactUpdate(contact)} />
                        <DeleteIcon className='delete-icon' onClick={() => this.props.contactDelete(contact)} />
                      </IconButton>

                    }
                  />
                )}

              </List>
              : undefined
            }

            <IconButton 
              iconStyle={{ height: 35, width: 35 }}
              onClick={this.toggleModal('contactModalOpen')}>
              <AddIcon color={amber800}/>
            </IconButton>

            <ContactModal 
              open={this.state.contactModalOpen}
              company={company}
              onComplete={this.props.contactCreate}
              modalClose={this.toggleModal('contactModalOpen')}
            />

            <ContactViewModal
              open={this.state.contactViewModalOpen}
              contact={this.state.contact}
              modalClose={this.toggleModal('contactViewModalOpen')}
            />;
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
  companyDelete: (company) => dispatch(companyDeleteRequest(company)),
  jobCreate: (company, job) => dispatch(jobCreateRequest(company, job)),
  jobDelete: (job) => dispatch(jobDeleteRequest(job)),
  jobUpdate: (job) => dispatch(jobUpdateRequest(job)),
  eventCreate: (company, jobEvent) => dispatch(eventCreateRequest(company, jobEvent)),
  eventDelete: (jobEvent) => dispatch(eventDeleteRequest(jobEvent)),
  eventUpdate: (jobEvent) => dispatch(eventUpdateRequest(jobEvent)),
  contactCreate: (company, contact) => dispatch(contactCreateRequest(company, contact)),
  contactDelete: (contact) => dispatch(contactDeleteRequest(contact)),
  contactUpdate: (contact) => dispatch(contactUpdateRequest(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);