
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// import Navbar from '../navbar';

class App extends React.Component {
  componentDidMount(){
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            {/* <Route path='*' component={Navbar} /> */}
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

let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);