import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'reactstrap';
import './SearchBar.css';

export default class SearchBar extends Component {
  //On click of the 'Clear' button, we update the props, and clear the input field
  clearSearch = e => {
    this.props.handleSearchInput('');
  };

  //On input change, we update the props at the Parent level
  handleChange = e => {
    this.props.handleSearchInput(e.target.value);
  };

  render() {
    return (
      <Row>
        <Col sm={{ size: '8', offset: 1 }}>
          <Input
            className="search-bar"
            placeholder="Search by Provider Name..."
            value={this.props.value}
            onChange={this.handleChange}
          />
        </Col>
        <Col sm="2">
          <Button className="search-btn" color="info" onClick={this.clearSearch}>
            Clear
          </Button>
        </Col>
      </Row>
    );
  }
}
