import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import EventSelector from '../select-field/event-select-field';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

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
      eventDate: null,
      eventNotes: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectChange(event, index, value) {
    this.setState({ eventType: value });
  };

  handleDateChange(event, date) {
    this.setState({
      eventDate: date,
    });
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
            value={this.state.eventType}
            onChange={this.handleSelectChange}
          >
            <MenuItem value={'info-interview'} primaryText="Informational Interview" />
            <MenuItem value={'phone-interview'} primaryText="Phone Interview" />
            <MenuItem value={'round-2-interview'} primaryText="Round 2 Interview" />
            <MenuItem value={'in-person-interview'} primaryText="In-Person Interview" />
            <MenuItem value={'offer'} primaryText="Offer" />
          </SelectField><br />

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
          {/* <TextField
            name='eventDate'
            value={this.state.eventDate}
            onChange={this.handleChange}
            hintText="Add an event"
            floatingLabelText="Event Date"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br /> */}
          <DatePicker
            hintText="Pick a Date"
            value={this.state.eventDate}
            onChange={this.handleDateChange}
          />
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