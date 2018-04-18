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

export default class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactLinkedIn: '',
      contactNotes: '',
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
        title='Add a Contact'
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='contactName'
            value={this.state.contactName}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Name"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='contactPhone'
            value={this.state.contactPhone}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Phone"
            floatingLabelFixed={true}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='contactEmail'
            value={this.state.contactEmail}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Email"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='contactLinkedIn'
            value={this.state.contactLinkedIn}
            onChange={this.handleChange}
            hintText="Additional Notes"
            floatingLabelText="Notes"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='contactNotes'
            value={this.state.contactNotes}
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