import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

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
              <h3>Job Seeker allows you to track potential career opportunities, including associated companies, job postings, events, and contact information. I'm not good at fancy headlines.</h3>
              <RaisedButton 
                primary={true} 
                label='Dashboard link'
                containerElement={<Link to='/dashboard' />}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}