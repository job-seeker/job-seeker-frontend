import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { singleCompanyFetchRequest } from '../../actions/company-actions';
import { jobCreateRequest } from '../../actions/job-actions';
import { eventCreateRequest } from '../../actions/event-actions';
import { contactCreateRequest } from '../../actions/contact-actions';
import { companyDeleteRequest } from '../../actions/company-actions';

import Dialog from 'material-ui/Dialog';
import TextField from  'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import { amber800 } from 'material-ui/styles/colors';

import './_company-view.scss';
import JobModal from '../modals/job-modal.js';
import EventModal from '../modals/event-modal.js';
import ContactModal from '../modals/contact-modal.js';
import CompanyModal from '../modals/company-modal.js';
import JobView from '../job-view';
import EventView from '../event-view';
import ContactView from '../contact-view';

class CompanyView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobModalOpen: false,
      contactModalOpen: false,
      eventModalOpen: false,
      companyModalOpen: false,
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
                {company.jobPosting.map(companyJob => 
                  <ListItem
                    key={companyJob._id} 
                    // // containerElement={() => render <JobView />}
                    //   // <Link to={'/job'} jobs={companyJob}>
                    //   //   <JobView jobs={companyJob} />
                    //   // </Link>
                    // // }
                    // onClick={this.renderJobView}
                    primaryText={companyJob.title} 
                    rightIconButton={
                      <div>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
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
          </section>

          <section className='company-upcoming-events'>
            <h3>Upcoming Events</h3>
            <Divider />

            {company.events
              ? <List>
                {company.events.map(event => 
                  <ListItem 
                    key={event._id}
                    containerElement={
                      <Link to={'/event'}>
                        <EventView />
                      </Link>
                    }
                    primaryText={event.eventTitle} 
                    rightIconButton={
                      <div>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
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
          </section>

          <section className='company-contacts'>
            <h3>Contacts</h3>
            <Divider />

            {company.contacts
              ? <List>
                {company.contacts.map(contact => 
                  <ListItem 
                    key={contact._id} 
                    containerElement={
                      <Link to={'/contact'}>
                        <ContactView contact={contact}/>
                      </Link>}
                    primaryText={contact.name} 
                    rightIconButton={
                      <div>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton iconStyle={{ height: 15, width: 15 }}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
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
  eventCreate: (company, jobEvent) => dispatch(eventCreateRequest(company, jobEvent)),
  contactCreate: (company, contact) => dispatch(contactCreateRequest(company, contact)),
  companyDelete: (company) => dispatch(companyDeleteRequest(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);