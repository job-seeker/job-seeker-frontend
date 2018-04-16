import React from 'react';
import TextField from 'material-ui/TextField';

export default class JobFields extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Add a Job"
          floatingLabelText="Job Title"
          floatingLabelFixed={true}
        /><br />
        <TextField
          hintText="Add a Job"
          floatingLabelText="Job Link"
          floatingLabelFixed={true}
        /><br />
        <TextField
          hintText="Add a Job"
          floatingLabelText="Job Status"
          floatingLabelFixed={true}
        /><br />
        <TextField
          hintText="Add a Job"
          floatingLabelText="Job Type"
          floatingLabelFixed={true}
        /><br />
      </div>
    );
  }
}
