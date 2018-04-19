import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';

import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500,
  },
};

export default class CompanyModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      companyName: '',
      website: '',
      cityState: '',
      companyNotes: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    return this.props.onComplete(this.props.profile, this.state)
      .then(this.props.modalClose)
      .catch(console.error);
  }

  render() {
    return (
      <Dialog
        title='Add Company'
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='companyName'
            value={this.state.companyName}
            onChange={this.handleChange}
            hintText="Add a Company"
            floatingLabelText="Company Name"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}
          /><br />
          <TextField
            name='website'
            value={this.state.website}
            onChange={this.handleChange}
            hintText="Add a Company"
            floatingLabelText="Company Website"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}                    
          /><br />
          <TextField
            name='cityState'
            value={this.state.cityState}
            onChange={this.handleChange}
            hintText="Add a company"
            floatingLabelText="Company City/State"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='companyNotes'
            value={this.state.companyNotes}
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