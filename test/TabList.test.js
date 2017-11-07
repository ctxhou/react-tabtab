import React from 'react';
import TabList, { ListStyle } from '../src/TabList';
import { shallow } from 'enzyme';
import 'jest-styled-components'

test('render TabList', () => {
  const component = shallow(
    <TabList>
      <span>hi</span>
    </TabList>
  );
  expect(component).toMatchSnapshot();
})

test('custom ListStyle style', () => {
  const CustomListStyle = ListStyle.extend`
    background-color: red;
  `;
  const component = shallow(
    <TabList customStyle={CustomListStyle}>
      <span>hi</span>
    </TabList>
  );
  expect(component).toHaveStyleRule('background-color', 'red');  
})
