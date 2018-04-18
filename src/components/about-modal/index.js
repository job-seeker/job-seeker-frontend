import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class AboutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <Dialog
        title='About Us'
        actions={this.props.actions}
        modal={false}
        onRequestClose={this.props.modalClose}
        open={this.props.open}
        autoScrollBodyContent={true}>
        <Card>
          <CardHeader
            title="Melanie Cohen"
            subtitle="JavaScript Programmer"
            avatar="https://avatars3.githubusercontent.com/u/26122258?s=460&v=4"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Alex Bowers"
            subtitle="JavaScript Programmer"
            avatar="https://media.licdn.com/dms/image/C5603AQE-7Tahqu82Vw/profile-displayphoto-shrink_200_200/0?e=1529272800&v=beta&t=uhO67Y_UhuPTyrH26orq3OAtrBe_CqpiBiH2_9a_EV4"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Christian Miller"
            subtitle="JavaScript Programmer"
            avatar="https://pbs.twimg.com/profile_images/732148999344394242/VPrUec47_400x400.jpg"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Ahmed Ali"
            subtitle="JavaScript Programmer"
            avatar="https://media.licdn.com/dms/image/C5603AQGo_j2TEvk58g/profile-displayphoto-shrink_800_800/0?e=1529272800&v=beta&t=Hl89OLSU_VLBTxI4um_rPR28Sf_ImDIWmV-LSK8GfkE"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
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