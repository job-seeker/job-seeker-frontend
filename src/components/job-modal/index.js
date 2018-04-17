import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500,
  },
};

export default class JobModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jobTitle: '',
      jobLink: '',
      jobStatus: '',
      jobType: '',
      jobNotes: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    
    return this.props.onComplete(this.state)
      .then(console.log()) // we should probably change this...
      // if (!this.props.profile) {
      //   this.setState({ description: '', preview: '', photo: null });
      // }
      // })
      .catch(console.error);
  }

  render() {
    return (
      <Dialog
        title='Add a job'
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='jobTitle'
            value={this.state.jobTitle}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Title"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='jobLink'
            value={this.state.jobLink}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Link"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='jobStatus'
            value={this.state.jobStatus}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Status"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='jobType'
            value={this.state.jobType}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Type"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='jobNotes'
            value={this.state.jobNotes}
            onChange={this.handleChange}
            hintText="Additional Notes"
            floatingLabelText="Notes"
            floatingLabelFixed={true}
          /><br />
        </div>

        <FlatButton
          label='Submit'
          primary={true}
          onClick={this.handleSubmit}
        />
        <FlatButton
          label='Cancel'
          primary={true}
          onClick={this.props.modalClose}
        />

      </Dialog>
    );
  }
}