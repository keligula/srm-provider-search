import React from 'react';
import { shallow } from 'enzyme';
import { Container, Table } from 'reactstrap';

it('Container renders without crashing', () => {
  shallow(<Container />);
});

it('Table renders without crashing', () => {
  shallow(<Table />);
});
