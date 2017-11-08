import React from 'react';
import Panel from '../src/Panel';
import { shallow } from 'enzyme';
import 'jest-styled-components'

test('render Panel', () => {
  const component = shallow(
    <Panel>
      <span>panel content</span>
    </Panel>
  );
  expect(component).toMatchSnapshot();
})
