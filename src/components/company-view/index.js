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

class CompanyView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      companyName: '',
      companyWebsite: '',
      cityState: '',
      companyNotes: '',
      created: '',
    };
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
            <IconButton style={{ display: 'inline-block' }} >
              <EditIcon />
            </IconButton>
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