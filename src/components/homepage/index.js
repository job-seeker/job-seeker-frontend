import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './_homepage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <RaisedButton primary={true} label='Hello world' />
        <h1>Job Seeker </h1>
        <p>Get Started </p>
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);