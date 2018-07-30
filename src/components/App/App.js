import React, { Component } from 'react';
import { Container, Alert } from 'reactstrap';
import PeopleTable from '../PeopleTable';
import OrganizationsTable from '../OrganizationsTable';
import SearchBar from '../SearchBar';

//Helper function to turn the current data properties
//for the People Table into more generic verbiage
const mapPersonPropertiesToGenerics = people => {
  return people.map(d => ({
    tableEntryId: d.person_id,
    tableEntryMain: d.person_name,
    tableEntryTitle: d.person_title,
    tableEntrySecondaryTitle: d.organization_name,
    tableEntryFooter: d.location
  }));
};

//Helper function to turn the current data properties
//for the Organizations Table into more generic verbiage
const mapOrganizationPropertiesToGenerics = people => {
  return people.map(d => ({
    tableEntrySecondaryTitle: d.organization_name,
    tableEntryFooter: d.location
  }));
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      search: ''
    };
  }

  //On page load, render entire data set
  componentWillMount() {
    const people = this.props.peopleService.getPeople();
    this.setState({ people });
  }

  //Loads people results based on if the search input exists anywhere in the person's name
  //If the input is cleared, it will render the full list again
  loadPeople = search => {
    return !search
      ? this.props.peopleService.getPeople()
      : this.props.peopleService.getPeopleByName(search);
  };

  //On input change in search, this sets the state and reloads the people results accordingly
  handleSearchInput = search => {
    this.setState({
      search,
      people: this.loadPeople(search)
    });
  };

  render() {
    const { people } = this.state;
    const peopleTableEntries = mapPersonPropertiesToGenerics(people);
    const orgTableEntries = mapOrganizationPropertiesToGenerics(people);
    let content;

    if (peopleTableEntries.length && orgTableEntries.length) {
      content = (
        <div>
          <PeopleTable header="People" data={peopleTableEntries} />
          <OrganizationsTable header="Organization" data={orgTableEntries} />
        </div>
      );
    } else {
      content = <Alert color="warning">Your search returned no results. Please try again.</Alert>;
    }

    return (
      <div>
        <Container>
          <SearchBar
            className="search-bar"
            handleSearchInput={this.handleSearchInput}
            value={this.state.search}
          />
          {content}
        </Container>
      </div>
    );
  }
}
