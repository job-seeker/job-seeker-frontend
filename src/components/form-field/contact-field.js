import React from 'react';
import TextField from 'material-ui/TextField';

const ContactFields = () => (
  <div>
    <TextField
      hintText="Add a Contact"
      floatingLabelText="Contact Name"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Add a Contact"
      floatingLabelText="Contact Number"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Add a Contact"
      floatingLabelText="Contact Email"
      floatingLabelFixed={true}
    /><br />
  </div>
);

export default ContactFields;