import React from 'react';

export default class HomePage extends React.Component{
  constructor(props){
    super(props);
  }

  login() {
    this.props.auth.login();
  }
  
  render(){
    return; 
    <section>
      <h1>Job Seeker </h1>
      <p>Get Started </p>
    </section>;
  }
}

// export default connect(mapStateProps, mapDispatchToProps)(HomePage);