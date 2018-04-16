import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
      <Table>
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Prop1</TableHeaderColumn>
            <TableHeaderColumn>Prop2</TableHeaderColumn>
            <TableHeaderColumn>Prop3</TableHeaderColumn>
            <TableHeaderColumn>Prop4</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody 
          showRowHover={true}
          displayRowCheckbox={false}>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{row.prop1}</TableRowColumn>
              <TableRowColumn>{row.prop2}</TableRowColumn>
              <TableRowColumn>{row.prop3}</TableRowColumn>
              <TableRowColumn>{row.prop4}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}