import React from 'react';
import TextField from 'material-ui/TextField';

const EventFields = () => (
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

export default EventFields;