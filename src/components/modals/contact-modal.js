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
      name: this.props.contact.name || '',
      email: this.props.contact.email || '',
      phone: this.props.contact.phone || '',
      linkedIn: this.props.contact.linkedIn || '',
      notes: this.props.contact.notes || '',
      _id: this.props.contact._id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      name: nextProps.contact.name,
      email: nextProps.contact.email,
      phone: nextProps.contact.phone,
      linkedIn: nextProps.contact.linkedIn,
      notes: nextProps.contact.notes,
      _id: nextProps.contact._id,
    });
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
            hintText={this.props.nameHintText}
            floatingLabelText="Contact Name"
            floatingLabelFixed={true}
            errorText="This field is required"
            errorStyle={styles.errorStyle}            
          /><br />
          <TextField
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            hintText={this.props.emailHintText}
            floatingLabelText="Contact Email"
            floatingLabelFixed={true}
            errorText="This field is required"   
            errorStyle={styles.errorStyle}                   
          /><br />
          <TextField
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
            hintText={this.props.phoneHintText}
            floatingLabelText="Contact Phone"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='linkedIn'
            value={this.state.linkedIn}
            onChange={this.handleChange}
            hintText={this.props.linkedInHintText}
            floatingLabelText="Contact LinkedIn"
            floatingLabelFixed={true}
          /><br />
          <TextField
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            hintText={this.props.notesInHintText}
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