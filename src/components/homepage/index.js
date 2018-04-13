import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from '../navbar';

import './_homepage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <NavBar />
        <RaisedButton primary={true} label='Hello world' />
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);