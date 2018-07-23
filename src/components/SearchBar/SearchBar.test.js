import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';
import { Button } from 'reactstrap';

it('Button renders without crashing', () => {
  shallow(<Button />);
});

it('SearchBar renders without crashing', () => {
  shallow(<SearchBar />);
});
