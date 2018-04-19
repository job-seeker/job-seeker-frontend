import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_listing-table.scss';
import CompanyView from '../company-view';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Subheader } from 'material-ui';

export default class ListingTable extends Component {
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
              <TableHeaderColumn>{this.props.column3}</TableHeaderColumn>
              <TableHeaderColumn>{this.props.column4}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={true}
            displayRowCheckbox={false}>

            {this.props.profile 
              ? this.props.header === 'All Companies'
                ? this.props.profile.companies.map((company) => (
                  <TableRow key={company._id}>
                    <TableRowColumn><Link to={'/company/'+company._id}>{company.companyName}</Link></TableRowColumn>
                    <TableRowColumn>{company.website}</TableRowColumn>
                    <TableRowColumn>{company.cityState}</TableRowColumn>
                    <TableRowColumn>{new Date(company.created).toDateString()}</TableRowColumn>
                  </TableRow>
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