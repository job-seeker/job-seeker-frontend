import React from 'react';
import TextField from 'material-ui/TextField';

const CompanyFields = () => (
  <div>
    <TextField
      hintText="Add a Company"
      floatingLabelText="Company Name"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Add a Company"
      floatingLabelText="Company Website"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Add a company"
      floatingLabelText="Company Address"
      floatingLabelFixed={true}
    /><br />
  </div>
);

export default CompanyFields;