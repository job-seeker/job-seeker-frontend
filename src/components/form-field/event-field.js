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
        /><br />
        <TextField
          hintText="Add an Event"
          floatingLabelText="Event Title"
          floatingLabelFixed={true}
        /><br />
        <TextField
          hintText="Add an Event"
          floatingLabelText="Event Date"
          floatingLabelFixed={true}
        /><br />
      </div>
    );
  }
};