import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Footer from '../footer';
import NavBar from '../navbar';
import './_homepage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <section className='homepage'>
        <NavBar />
        <div className='title-div'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          <RaisedButton 
            primary={true} 
            label='Dashboard link'
            containerElement={<Link to='/dashboard' />}
          />
        </div>

        <Footer />
      </section>
    );
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);