import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';

export default class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventType: '',
      eventTitle: '',
      eventDate: '',
      eventNotes: '',
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
        title='Add an event'
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='eventType'
            value={this.state.eventType}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Type"
            floatingLabelFixed={true}
            errorText="This field is required"
          /><br />
          <TextField
            name='eventTitle'
            value={this.state.eventTitle}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Title"
            floatingLabelFixed={true}
            errorText="This field is required"          
          /><br />
          <TextField
            name='eventDate'
            value={this.state.eventDate}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Date"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='eventNotes'
            value={this.state.eventNotes}
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