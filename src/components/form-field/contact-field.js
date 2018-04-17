import React from 'react';
import TextField from 'material-ui/TextField';

export default class ContactFields extends React.Component {
  render () {
    return (
      <div>
        <TextField
          hintText="Add a Contact"
          floatingLabelText="Contact Name"
          floatingLabelFixed={true}
          errorText="This field is required"          
        /><br />
        <TextField
          hintText="Add a Contact"
          floatingLabelText="Contact Number"
          floatingLabelFixed={true}
          errorText="This field is required"          
        /><br />
        <TextField
          hintText="Add a Contact"
          floatingLabelText="Contact Email"
          floatingLabelFixed={true}
          errorText="This field is required"          
        /><br />
        <TextField
          hintText="Additional Notes"
          floatingLabelText="Notes"
          floatingLabelFixed={true}
        /><br />
      </div>
    );
  }
};
