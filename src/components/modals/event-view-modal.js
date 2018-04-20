import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import { List, ListItem } from 'material-ui';
import { indigo500 } from 'material-ui/styles/colors';

export default class EventViewModal extends Component {
  render() {
    return (
      <Dialog
        title='Event Info'
        actions={this.props.actions}
        modal={false}
        onRequestClose={this.props.modalClose}
        open={this.props.open}
        autoScrollBodyContent={true}>
        <Card>
          <CardHeader
            title={this.props.event.eventType}
          />
          <CardText>
            <List>
              <ListItem
                primaryText='Event Title'
                secondaryText={this.props.event.eventTitle}
              />
              <ListItem
                primaryText='Event Date'
                secondaryText={this.props.event.eventDate.toString().split('T')[0]}
              />
              <ListItem 
                primaryText='Notes'
                secondaryText={this.props.event.eventNotes}
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