import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_mobile-listing-table.scss';
import CompanyView from '../company-view';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Subheader } from 'material-ui';

export default class MobileListingTable extends Component {
  render() {
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
      </div>
    );
  }
}