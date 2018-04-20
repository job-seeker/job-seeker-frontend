import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import { List, ListItem } from 'material-ui';
import { indigo500 } from 'material-ui/styles/colors';

export default class ContactViewModal extends Component {
  render() {
    console.log('state',this.state);
    console.log('props', this.props)
    return (
      <Dialog
        title='Contact Info'
        actions={this.props.actions}
        modal={false}
        onRequestClose={this.props.modalClose}
        open={this.props.open}
        autoScrollBodyContent={true}>
        <Card>
          <CardHeader
            title={this.props.contact.name}
          />
          <CardText>
            <List>
              <ListItem
                leftIcon={<CommunicationCall color={indigo500} />}
                primaryText={this.props.contact.phone}
              />
              <ListItem
                leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText={this.props.contact.email}
              />
            </List>
          </CardText>
        </Card>
        <FlatButton
          label='Close'
          primary={true}
          onClick={this.props.modalClose}
        />
      </Dialog>
    );
  }
}