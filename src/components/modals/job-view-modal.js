import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import { List, ListItem } from 'material-ui';
import { indigo500 } from 'material-ui/styles/colors';

export default class JobViewModal extends Component {
  render() {
    return (
      <Dialog
        title='Job Info'
        actions={this.props.actions}
        modal={false}
        onRequestClose={this.props.modalClose}
        open={this.props.open}
        autoScrollBodyContent={true}>
        <Card>
          <CardHeader
            title={this.props.job.title}
            style={{ paddingBottom: 0 }}
          />
          <CardText>
            <List>
              <ListItem
                style={{ paddingTop: 0 }}
                primaryText='Job Link'
                secondaryText={this.props.job.link}
              />
              <ListItem
                primaryText='Job Status'
                secondaryText={this.props.job.status}
              />
              <ListItem 
                primaryText='Notes'
                secondaryText={this.props.job.notes}
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