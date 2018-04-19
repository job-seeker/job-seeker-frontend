import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { profileCreateRequest, profileFetchRequest } from '../../actions/profile-actions';
import { tokenSet } from  '../../actions/user-auth-actions';

import './_app.scss';
import HomePage from '../homepage';
import Dashboard from '../dashboard';
import CompanyListings from '../company-listings';
import JobListings from '../job-listings';
import EventListings from '../event-listings';
import CompanyView from '../company-view';
import EventView from '../event-view';
import JobView from '../job-view';
import ContactView from '../contact-view';
import AuthRedirect from '../auth-redirect';

class App extends Component {
  componentWillMount() {
    let localToken = localStorage.jobSeekerToken;
    if (localToken) {
      this.props.tokenSet(localToken);
      this.props.profileFetch(localToken);
    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='routes'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dashboard' component={CompanyListings} />
            <Route exact path='/companies' component={CompanyListings} />
            <Route exact path='/jobs' component={JobListings} />
            <Route exact path='/events' component={EventListings} />
            <Route exact path='/company/:companyId' component={CompanyView} />
            <Route exact path='/event' component={EventView} />
            <Route exact path='/job' component={JobView} />
            <Route exact path='/contact' component={ContactView} />
            <Route path='/' component={AuthRedirect} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  userLogin: user => dispatch(signinRequest(user)),
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
  profileFetch: token => dispatch(profileFetchRequest(token)),
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);