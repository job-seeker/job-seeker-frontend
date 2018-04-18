import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

const tableData = [
  {
    prop1: 'Captain Marvel',
    prop2: 'Employed',
    prop3: 'Employed',
    prop4: 'Employed',
  },
  {
    prop1: 'Randal White',
    prop2: 'Employed',
    prop3: 'Employed',
    prop4: 'Employed',
  },
  {
    prop1: 'Stephanie Sanders',
    prop2: 'Employed',
    prop3: 'Employed',
    prop4: 'Employed',
  },
  {
    prop1: 'Steve Brown',
    prop2: 'Employed',
    prop3: 'Employed',
    prop4: 'Employed',
  },
];

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
                    <TableRowColumn>{company.streetAddress}</TableRowColumn>
                    <TableRowColumn>{company.created}</TableRowColumn>
                  </TableRow>
                ))
                : undefined
              : tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.prop1}</TableRowColumn>
                  <TableRowColumn>{row.prop2}</TableRowColumn>
                  <TableRowColumn>{row.prop3}</TableRowColumn>
                  <TableRowColumn>{row.prop4}</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}