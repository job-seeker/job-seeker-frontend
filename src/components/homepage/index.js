import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import { amber800 } from 'material-ui/styles/colors';

import AuthComponent from '../auth-landing/component';
import NavBar from '../navbar';
import './_homepage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <NavBar />
        <div className='outer'>
          <div className='middle'>
            <div className='inner'>
              <h2>The personal database for all of your job-seeking activities.</h2>
              <h3>Job Seeker allows you to track potential career opportunities, including their associated companies, job postings, events, and contact information all in one place.</h3>
              <RaisedButton 
                primary={true} 
                label='Dashboard link'
                containerElement={<AuthComponent className='hero-button' />}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}