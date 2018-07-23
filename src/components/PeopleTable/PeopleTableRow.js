import React, { Component } from 'react';
import Avatar from 'react-avatar';
import './PeopleTable.css';

export default class PeopleTableRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td className="search-result-name">
            <Avatar className="avatar" name={this.props.entry.tableEntryMain} size="30px" />
            {this.props.entry.tableEntryMain}
          </td>
          <td className="search-results">{this.props.entry.tableEntryTitle}</td>
          <td className="search-results">{this.props.entry.tableEntrySecondaryTitle}</td>
          <td className="search-results-footer">{this.props.entry.tableEntryFooter}</td>
        </tr>
      </tbody>
    );
  }
}
