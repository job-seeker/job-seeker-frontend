import React from 'react';
import TextField from 'material-ui/TextField';

export default class EventFields extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Add an Event"
          floatingLabelText="Event Type"
          floatingLabelFixed={true}
          errorText="This field is required"          
        /><br />
        <TextField
          hintText="Add an Event"
          floatingLabelText="Event Title"
          floatingLabelFixed={true}
          errorText="This field is required"          
        /><br />
        <TextField
          hintText="Add an Event"
          floatingLabelText="Event Date"
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