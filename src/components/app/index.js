import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from '../homepage';
import Dashboard from '../dashboard';
import './_app.scss';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='routes'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dashboard' component={Dashboard} />
            {/* <Route exact path='/' component={} />
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