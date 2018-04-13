import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from '../navbar';

import './_homepage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <NavBar />
        <RaisedButton 
          primary={true} 
          label='Dashboard link'
          containerElement={<Link to='/dashboard' />}
        />
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);