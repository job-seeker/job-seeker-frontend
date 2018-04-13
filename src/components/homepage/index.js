import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class HomePage extends Component {
  render() {
    return (
      <section>
        <RaisedButton primary={true} label='Hello world' />
        <h1>Job Seeker </h1>
        <p>Get Started </p>
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);