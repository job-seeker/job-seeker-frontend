import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import { amber800 } from 'material-ui/styles/colors';

import AuthComponent from '../auth-landing/component';
import NavBar from '../navbar';
import './_homepage.scss';

class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <NavBar />
        <div className='outer'>
          <div className='middle'>
            <div className='inner'>
              <h2>The personal database for all of your job-seeking activities.</h2>
              <h3>Job Seeker allows you to track potential career opportunities, including their associated companies, job postings, events, and contact information all in one place.</h3>
              {this.props.token
                ? <RaisedButton 
                  primary={true} 
                  label='Go To Dashboard'
                  containerElement={<Link to='/dashboard' />}
                />
                : <RaisedButton 
                  primary={true} 
                  containerElement={<AuthComponent className='hero-button' />}
                />
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
let mapStateToProps = (state) => ({
  token: state.token,
  profile: state.profile,
});

export default connect(mapStateToProps, null)(HomePage);