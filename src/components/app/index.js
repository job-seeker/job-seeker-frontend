import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import { connect } from 'react-redux';
// import Navbar from '../navbar';
import HomePage from '../homepage';
import NavBar from '../navbar';
import './_app.scss';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route path='*' component={NavBar} />
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/welcome' component={} />
            <Route exact path='/' component={} />
            <Route exact path='/' component={} />
            <Route exact path='/' component={} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// let mapStateToProps = (state) => ({

// });

// let mapDispatchToProps = (dispatch) => ({
  
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);