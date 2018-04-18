import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Footer from '../footer';
import NavBar from '../navbar';
import './_homepage.scss';

class HomePage extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log('this.props',this.props)
  //   console.log('nextprops', nextProps)
  //   if (!this.props.token && nextProps.token) {
  //     this.props.history.push('/');
  //   }
  // }

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
        <Footer />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(HomePage);