import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
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
      eventType: this.props.event.eventType || '',
      eventTitle: this.props.event.eventTitle || '',
      eventDate: this.props.event.eventDate || null,
      eventNotes: this.props.event.eventNotes || '',
      _id: this.props.event._id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      eventType: nextProps.event.eventType,
      eventTitle: nextProps.event.eventTitle,
      eventDate: nextProps.event.eventDate,
      eventNotes: nextProps.event.eventNotes,
      _id: nextProps.event._id,
    });
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
            errorText="This field is required"   
            errorStyle={styles.errorStyle}>
            <MenuItem value={'Informational Interview'} primaryText="Informational Interview" />
            <MenuItem value={'Phone Interview'} primaryText="Phone Interview" />
            <MenuItem value={'Tech Screen'} primaryText="Tech Screen" />
            <MenuItem value={'In-Person Interview'} primaryText="In-Person Interview" />
            <MenuItem value={'Networking Event'} primaryText="Networking Event" />
            <MenuItem value={'Meetup'} primaryText="Meetup" />

          </SelectField><br />
          <TextField
            name='eventTitle'
            value={this.state.eventTitle}
            onChange={this.handleChange}
            hintText={this.props.titleHintText}
            floatingLabelText="Event Title"
            floatingLabelFixed={true}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}                   
          /><br />
          <DatePicker
            hintText="Pick a Date"
            value={this.state.eventDate}
            onChange={this.handleDateChange}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}
          />
          <TextField
            name='eventNotes'
            value={this.state.eventNotes}
            onChange={this.handleChange}
            hintText={this.props.notesHintText}
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