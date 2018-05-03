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
            style={{ paddingBottom: 0 }}
          />
          <CardText>
            <List style={{ paddingTop: 0 }}>
              <ListItem
                // leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText='Email'
                secondaryText={this.props.contact.email}
              />
              {this.props.contact.phone !== '' 
                ? <ListItem
                  style={{ paddingTop: 0 }}
                  // leftIcon={<CommunicationCall color={indigo500} />}
                  primaryText='Phone'
                  secondaryText={this.props.contact.phone}
                />
                : undefined}
              <ListItem 
                primaryText='LinkedIn'
                secondaryText={this.props.contact.linkedIn} 
              />
              <ListItem
                primaryText='Notes'
                secondaryText={this.props.contact.notes} 
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