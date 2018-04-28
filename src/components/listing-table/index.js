import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { companyDeleteRequest } from '../../actions/company-actions';

import './_listing-table.scss';
import CompanyView from '../company-view';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Subheader, IconButton, RaisedButton } from 'material-ui';

class ListingTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalOpen: false,
      company: null,
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen(company) {
    this.setState({ 
      modalOpen: true,
      company: company,
    });
  }

  modalClose() {
    this.setState({ 
      modalOpen: false,
    });
  }

  render() {
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.modalClose}
      />,
      <FlatButton
        label="Yes, delete this company."
        primary={true}
        onClick={() => {
          this.props.companyDelete(this.state.company);
          this.modalClose();
        }}
      />,
    ];

    return (
      <div className='listing-table'>
        <Subheader>{this.props.header}</Subheader>
        <Table selectable={true}>
          <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>{this.props.column1}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column2}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column3}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column4}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column5}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={true}
            displayRowCheckbox={false}>

            {this.props.profile 
              ? this.props.header === 'All Companies'
                ? this.props.profile.companies.map((company) => (
                  <TableRow key={company._id}>
                    <TableRowColumn>  
                      <Link to={{
                        pathname: '/company',
                        state: { company: company },
                      }}>{company.companyName}</Link>
                    </TableRowColumn>
                    <TableRowColumn>{company.website}</TableRowColumn>
                    <TableRowColumn>{company.cityState}</TableRowColumn>
                    <TableRowColumn>{new Date(company.created).toDateString()}</TableRowColumn>
                    <TableRowColumn>
                      <IconButton
                        style={{ width: '10px', display: 'inline-block' }}
                        iconStyle={{ height: 18, width: 18 }}
                        onClick={() => this.modalOpen(company)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                ))
                : undefined
              : undefined
            }

            {this.props.profile 
              ? this.props.header === 'All Jobs'
                ? this.props.profile.companies.map((company) => (
                  company.jobPosting.map((job) => 
                    <TableRow key={job._id}>
                      {/* <TableRowColumn><Link to={'/company/'+company._id}>{job.title}</Link></TableRowColumn> */}
                      <TableRowColumn>{company.companyName}</TableRowColumn>
                      <TableRowColumn>{job.status}</TableRowColumn>
                      <TableRowColumn>{new Date(job.created).toDateString()}</TableRowColumn>
                    </TableRow>
                  )
                ))
                : undefined
              : undefined
            }

            {this.props.profile 
              ? this.props.header === 'All Events'
                ? this.props.profile.companies.map((company) => (
                  company.events.map((event) => 
                    <TableRow key={event._id}>
                      {/* <TableRowColumn><Link to={'/company/'+company._id}>{event.eventTitle}</Link></TableRowColumn> */}
                      <TableRowColumn>{company.companyName}</TableRowColumn>
                      <TableRowColumn>{new Date(event.eventDate).toDateString()}</TableRowColumn>
                      <TableRowColumn>{new Date(event.created).toDateString()}</TableRowColumn>
                    </TableRow>
                  )
                ))
                : undefined
              : undefined
            }
          </TableBody>
        </Table>

        {this.state.modalOpen
          ? <Dialog 
            title='Are you sure you want to delete this company?'
            open={this.state.modalOpen}
            actions={modalActions}
            modal={false}>
            This action will permanently remove all company records, including associated jobs, events, and contacts.
          </Dialog>
          : null
        }
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  companyDelete: (company) => dispatch(companyDeleteRequest(company)),
});

export default connect(null, mapDispatchToProps)(ListingTable);