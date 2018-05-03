import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  errorStyle: {
    color: orange500,
  },
};

export default class JobModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.job.title || '',
      link: this.props.job.link || '',
      type: this.props.job.type || '',
      notes: this.props.job.notes || '',
      status: this.props.job.status || 'None Selected',
      _id: this.props.job._id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      title: nextProps.job.title,
      link: nextProps.job.link,
      type: nextProps.job.type,
      notes: nextProps.job.notes,
      status: nextProps.job.status,
      _id: nextProps.job._id,
    });
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  };

  handleSelectChange(event, index, value) {
    this.setState({ status: value });
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
        title='Add a job'
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            hintText={this.props.titleHintText}
            floatingLabelText="Job Title"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='link'
            value={this.state.link}
            onChange={this.handleChange}
            hintText={this.props.linkHintText}
            floatingLabelText="Job Link"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}
          /><br />
          <SelectField
            name='status'
            floatingLabelText='Job Status'
            value={this.state.status}
            onChange={this.handleSelectChange}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}           
            hintText={this.props.statusHintText}
            required>
            <MenuItem value={'Application Submitted'} primaryText="Application Submitted" />
            <MenuItem value={'Phone Interview'} primaryText="Phone Interview" />
            <MenuItem value={'Tech Screen'} primaryText="Tech Screen" />
            <MenuItem value={'In-Person Interview'} primaryText="In-Person Interview" />
            <MenuItem value={'Offer Received'} primaryText="Offer Received" />
            <MenuItem value={'Rejected/Misc.'} primaryText="Rejected/Misc." />
          </SelectField><br />
          <TextField
            name='type'
            value={this.state.type}
            onChange={this.handleChange}
            hintText={this.props.typeHintText}
            floatingLabelText="Job Type"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='notes'
            value={this.state.notes}
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