import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import EventSelector from '../select-field/event-select-field';

const styles = {
  errorStyle: {
    color: orange500,
  },
};

export default class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventType: '',
      eventTitle: '',
      eventDate: '',
      eventNotes: '',
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.modalClose();
    
    return this.props.onComplete(this.props.company, this.state)
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
          <SelectField
            floatingLabelText="Event Type"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Informational Interview" />
            <MenuItem value={2} primaryText="Phone Interview" />
            <MenuItem value={3} primaryText="Round 2 Interview" />
            <MenuItem value={4} primaryText="In-Person Interview" />
            <MenuItem value={5} primaryText="Offer" />
          </SelectField>
          <TextField
            name='eventTitle'
            value={this.state.eventTitle}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Title"
            floatingLabelFixed={true}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='eventDate'
            value={this.state.eventDate}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Date"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
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