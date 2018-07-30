import React, { Component } from 'react';
import Avatar from 'react-avatar';
import './OrganizationsTable.css';

export default class OrganizationsTableRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td className="search-result-name">
            <Avatar
              className="avatar"
              name={this.props.entry.tableEntrySecondaryTitle}
              size="30px"
            />
            {this.props.entry.tableEntrySecondaryTitle}
          </td>
          <td />
          <td />
          <td className="search-results-footer">{this.props.entry.tableEntryFooter}</td>
        </tr>
      </tbody>
    );
  }
}
