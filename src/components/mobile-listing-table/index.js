import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { companyDeleteRequest } from '../../actions/company-actions';


import './_mobile-listing-table.scss';
import CompanyView from '../company-view';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Subheader } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class MobileListingTable extends Component {
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
        <Table>
          <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>{this.props.column1}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column2}</TableHeaderColumn>
              {this.props.profile 
                ? this.props.header === 'All Companies'
                  ? <TableHeaderColumn>{this.props.column3}</TableHeaderColumn>
                  : null
                : null
              }
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={true}
            displayRowCheckbox={false}>

            {this.props.profile 
              ? this.props.header === 'All Companies'
                ? this.props.profile.companies.map((company) => (
                  <TableRow key={company._id}>
                    <TableRowColumn><Link to={'/company/'+company._id}> {company.companyName}</Link>
                    </TableRowColumn>
                    <TableRowColumn>{company.website}</TableRowColumn>
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
                      <TableRowColumn><Link to={'/company/'+company._id}>{job.title}</Link></TableRowColumn>
                      <TableRowColumn>{company.companyName}</TableRowColumn>
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
                      <TableRowColumn><Link to={'/company/'+company._id}>{event.eventTitle}</Link></TableRowColumn>
                      <TableRowColumn>{company.companyName}</TableRowColumn>
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

export default connect(null, mapDispatchToProps)(MobileListingTable);