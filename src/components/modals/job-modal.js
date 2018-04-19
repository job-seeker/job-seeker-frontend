import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import JobStatusSelector from '../select-field/job-status-field';
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
      title: '',
      link: '',
      type: '',
      notes: '',
      status: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Title"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='link'
            value={this.state.link}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Link"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='type'
            value={this.state.type}
            onChange={this.handleChange}
            hintText="Add a job"
            floatingLabelText="Job Type"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            hintText="Additional Notes"
            floatingLabelText="Notes"
            floatingLabelFixed={true}
          /><br />
          <SelectField
            floatingLabelText="Job Status"
            value={this.state.status}
            onChange={this.handleSelectChange}
            required
          >
            <MenuItem value={'review'} primaryText="Under Review" />
            <MenuItem value={'accepted'} primaryText="Accepted" />
            <MenuItem value={'rejected'} primaryText="Rejected" />
          </SelectField>
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