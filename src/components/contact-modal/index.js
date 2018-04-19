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
      name: '',
      email: '',
      phone: '',
      linkedIn: '',
      notes: '',
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
        title='Add a Contact'
        actions={this.props.actions}
        modal={false}
        open={this.props.open}>

        <div>
          <TextField
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Name"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Email"
            floatingLabelFixed={true}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact Phone"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='linkedIn'
            value={this.state.linkedIn}
            onChange={this.handleChange}
            hintText="Add a Contact"
            floatingLabelText="Contact LinkedIn"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='notes'
            value={this.state.notes}
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