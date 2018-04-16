import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CompanyFields from '../form-field/event-field';

export default class AddModal extends Component {
  render() {
    return (
      <Dialog
        ref='dialog'
        title='Add Company'
        actions={this.props.actions}
        modal={true}
        open={this.props.open}
      >

        <CompanyFields />

      </Dialog>
    );
  }
}