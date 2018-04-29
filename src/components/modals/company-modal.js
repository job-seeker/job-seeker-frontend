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
      companyName: this.props.companyNameValue || '',
      website: this.props.websiteValue || '',
      cityState: this.props.cityStateValue || '',
      companyNotes: this.props.companyNotes || '',
      companyId: this.props.companyId || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    return this.props.onComplete(this.props.profile, this.state)
      .then(this.props.modalClose)
      // .then(this.setState({
      //   companyName: '',
      //   website: '',
      //   cityState: '',
      //   companyNotes: '',  
      // }))
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
            hintText={this.props.companyNameHintText}
            floatingLabelText='Company Name'
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}
            value={this.state.companyName}
          /><br />
          <TextField
            name='website'
            value={this.state.website}
            onChange={this.handleChange}
            hintText={this.props.websiteHintText}
            floatingLabelText="Company Website"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}
            value={this.state.website}
          /><br />
          <TextField
            name='cityState'
            value={this.state.cityState}
            onChange={this.handleChange}
            hintText={this.props.cityStateHintText}
            floatingLabelText="Company City/State"
            floatingLabelFixed={true}
            value={this.state.cityState}
          /><br />
          <TextField
            name='companyNotes'
            value={this.state.companyNotes}
            onChange={this.handleChange}
            hintText={this.props.companyNotesHintText}
            floatingLabelText="Notes"
            floatingLabelFixed={true}
            value={this.state.companyNotes}
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