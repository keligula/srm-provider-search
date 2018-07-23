import React, { Component } from 'react';
import { Table as BootstrapTable, Label } from 'reactstrap';
import TableRow from './OrganizationsTableRow';

export default class OrganizationsTable extends Component {
  render() {
    return (
      <div>
        <Label className="table-header">{this.props.header}</Label>
        <BootstrapTable>
          {this.props.data.map(entry => <TableRow key={entry.tableEntryId} entry={entry} />)}
        </BootstrapTable>
      </div>
    );
  }
}
