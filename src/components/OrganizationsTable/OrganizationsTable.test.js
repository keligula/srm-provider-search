import React from 'react';
import { shallow } from 'enzyme';
import { Table as BootstrapTable, Label } from 'reactstrap';

it('Label renders without crashing', () => {
  shallow(<Label />);
});

it('BootstrapTable renders without crashing', () => {
  shallow(<BootstrapTable />);
});
