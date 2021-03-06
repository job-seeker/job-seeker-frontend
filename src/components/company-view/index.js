import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileFetchRequest } from '../../actions/profile-actions';
import { singleCompanyFetchRequest, companyUpdateRequest } from '../../actions/company-actions';
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
        linkedIn: '',
        notes: '',
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
      editMode: false,
    };
  }

  toggleModal(modalName) {
    return () => {
      this.setState(prevState => ({
        [modalName]: !prevState[modalName],
      })
      );
    };
  }  
  
  toggleEditMode(modalName) {
    return () => {
      this.setState({
        contact: {
          name: '',
          email: '',
          phone: '',
          linkedIn: '',
          notes: '',  
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
        editMode: false,
      });
      this.toggleModal(modalName)();
    };
  }
  
  handleUpdateClick(itemName, item) {
    return() => {
      this.toggleModal(`${itemName}ModalOpen`)();
      this.setState({ [itemName]: item, editMode: true });
    };
  }

  handleItemClick(itemName, item) {
    return() => {
      this.toggleModal(`${itemName}ViewModalOpen`)();
      this.setState({ [itemName]: item });
    };
  }
  
  render() {
    const company = this.props.profile.companies.filter(company => 
      company._id === this.props.match.params.companyId
    )[0];
    
    return (
      <div>
        <div className='company-view'>
          <Subheader style={{ padding: 0 }}>{company.companyName}</Subheader>
        
          <section className='company-info'>
            <h3>Company Info</h3>
            <div className='company-buttons'>
              <IconButton 
                style={{ width: '10px', display: 'inline-block' }}
                iconStyle={{ height: 15, width: 15 }} 
                onClick={this.toggleModal('companyModalOpen')}>
                <EditIcon />
              </IconButton>
            </div>

            <CompanyModal
              open={this.state.companyModalOpen}
              modalClose={this.toggleModal('companyModalOpen')}
              profile={this.props.profile}
              companyId={company._id}
              companyNameValue={company.companyName}
              websiteValue={company.website}
              cityStateValue={company.cityState}
              cityStateHintText='Update city/state'
              companyNotesValue={company.companyNotes}
              companyNotesHintText='Update company notes'
              onComplete={this.props.companyUpdate}
            />
            
            <Divider />
            <p><span>Company:</span>{company.companyName}</p>
            <p><span>Website:</span>{company.website}</p>
            <p><span>City, State:</span>{company.cityState}</p>
            <p><span>Created:</span>{new Date(company.created).toDateString()}</p>
            <p><span>Notes:</span></p>
            <textarea readOnly placeholder={company.companyNotes} />
          </section>

          <section className='company-job-postings'>
            <h3>Job Postings</h3>
            <div className='add-buttons'>
              <IconButton 
                iconStyle={{ height: 24, width: 24, display: 'inline-block' }}
                onClick={this.toggleModal('jobModalOpen')}>
                <AddIcon color={amber800}/>
              </IconButton>
            </div>

            <Divider />
            {company.jobPosting
              ? <List>
                {company.jobPosting.map(job => 
                  <ListItem
                    key={job._id} 
                    onClick={this.handleItemClick('job', job)}
                    primaryText={job.title} 
                    rightIconButton={
                      <IconButton 
                        style={{ width: 80 }} 
                        iconStyle={{ 'marginRight': 10, height: 15, width: 15 }}>
                        <EditIcon 
                          className='edit-icon' 
                          onClick={this.handleUpdateClick('job', job)}
                        />
                        <DeleteIcon 
                          className='delete-icon' 
                          onClick={() => this.props.jobDelete(job)} 
                        />
                      </IconButton>
                    }
                  />
                )}
              </List>
              : undefined
            }

            <JobModal 
              open={this.state.jobModalOpen}
              company={company}
              job={this.state.job}
              onComplete={this.state.editMode ? this.props.jobUpdate : this.props.jobCreate}
              modalClose={this.state.editMode ? this.toggleEditMode('jobModalOpen') : this.toggleModal('jobModalOpen')}
              titleHintText={this.state.editMode ? 'Update job title' : 'Job title'}
              linkHintText={this.state.editMode ? 'Update job link' : 'Link to job posting'}
              statusHintText={this.state.editMode ? 'Update job status' : 'Job application status'}
              typeHintText={this.state.editMode ? 'Update job type' : 'Job type'}
              notesHintText={this.state.editMode ? 'Update job notes' : 'Additional notes'}
            />

            <JobViewModal
              open={this.state.jobViewModalOpen}
              job={this.state.job}
              modalClose={this.toggleModal('jobViewModalOpen')}
            />
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <div className='add-buttons'>
              <IconButton 
                iconStyle={{ height: 24, width: 24, display: 'inline-block' }}
                onClick={this.toggleModal('eventModalOpen')}>
                <AddIcon color={amber800}/>
              </IconButton>
            </div>
            <Divider />

            {company.events
              ? <List>
                {company.events.map(event => 
                  <ListItem 
                    key={event._id}
                    primaryText={event.eventTitle} 
                    onClick={this.handleItemClick('event', event)}
                    rightIconButton={
                      <IconButton 
                        style={{ width: 80 }} 
                        iconStyle={{ 'marginRight': 10, height: 15, width: 15 }}>
                        <EditIcon 
                          className='edit-icon' 
                          onClick={this.handleUpdateClick('event', event)}
                        />
                        <DeleteIcon 
                          className='delete-icon' 
                          onClick={() => this.props.eventDelete(event)} 
                        />
                      </IconButton>
                    }
                  />
                )}
              </List>
              : undefined
            }

            <EventModal 
              open={this.state.eventModalOpen}
              company={company}
              event={this.state.event}
              onComplete={this.state.editMode ? this.props.eventUpdate : this.props.eventCreate}
              modalClose={this.state.editMode ? this.toggleEditMode('eventModalOpen') : this.toggleModal('eventModalOpen')}
              titleHintText={this.state.editMode ? 'Update event title' : 'Event title'}
              notesHintText={this.state.editMode ? 'Update event notes' : 'Additional notes'}
            />

            <EventViewModal 
              open={this.state.eventViewModalOpen}
              event={this.state.event}
              modalClose={this.toggleModal('eventViewModalOpen')}
            />
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>

            <div className='add-buttons'>
              <IconButton 
                iconStyle={{ height: 24, width: 24, display: 'inline-block' }}
                onClick={this.toggleModal('contactModalOpen')}>
                <AddIcon color={amber800}/>
              </IconButton>
            </div>

            <Divider />

            {company.contacts
              ? <List>
                {company.contacts.map(contact => 
                  <ListItem 
                    key={contact._id} 
                    onClick={this.handleItemClick('contact', contact)}
                    primaryText={contact.name}
                    rightIconButton={
                      <IconButton style={{ width: 80 }} iconStyle={{ 'marginRight': 10, height: 15, width: 15 }}>
                        <EditIcon 
                          className='edit-icon' 
                          onClick={this.handleUpdateClick('contact', contact)}
                        />
                        <DeleteIcon 
                          className='delete-icon' 
                          onClick={() => this.props.contactDelete(contact)} 
                        />
                      </IconButton>
                    }
                  />
                )}
              </List>
              : undefined
            }

            <ContactModal 
              open={this.state.contactModalOpen}
              company={company}
              contact={this.state.contact}
              onComplete={this.state.editMode ? this.props.contactUpdate : this.props.contactCreate}
              modalClose={this.state.editMode ? this.toggleEditMode('contactModalOpen') : this.toggleModal('contactModalOpen')}
              nameHintText={this.state.editMode ? 'Update contact name' : 'Contact name'}
              emailHintText={this.state.editMode ? 'Update contact email' : 'Contact email'}
              nameHintText={this.state.editMode ? 'Update contact name' : 'Contact name'}
              phoneHintText={this.state.editMode ? 'Update contact phone' : 'Contact phone'}
              linkedInHintText={this.state.editMode ? 'Update contact LinkedIn' : 'Contact LinkedIn'}
              notesHintText={this.state.editMode ? 'Update contact notes' : 'Additional notes'}
            />

            <ContactViewModal
              open={this.state.contactViewModalOpen}
              contact={this.state.contact}
              modalClose={this.toggleModal('contactViewModalOpen')}
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
  profileFetch: (profile) => dispatch(profileFetchRequest(profile)),
  companyFetch: (company) => dispatch(singleCompanyFetchRequest(company)),
  companyUpdate: (profile, company) => dispatch(companyUpdateRequest(profile, company)),
  jobCreate: (company, job) => dispatch(jobCreateRequest(company, job)),
  jobDelete: (job) => dispatch(jobDeleteRequest(job)),
  jobUpdate: (company, job) => dispatch(jobUpdateRequest(company, job)),
  eventCreate: (company, jobEvent) => dispatch(eventCreateRequest(company, jobEvent)),
  eventDelete: (jobEvent) => dispatch(eventDeleteRequest(jobEvent)),
  eventUpdate: (company, jobEvent) => dispatch(eventUpdateRequest(company, jobEvent)),
  contactCreate: (company, contact) => dispatch(contactCreateRequest(company, contact)),
  contactDelete: (contact) => dispatch(contactDeleteRequest(contact)),
  contactUpdate: (company, contact) => dispatch(contactUpdateRequest(company, contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);