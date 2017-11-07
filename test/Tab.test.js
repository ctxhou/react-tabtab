import React from 'react';
import Tab, { TabStyle } from '../src/Tab';
import { shallow } from 'enzyme';
import 'jest-styled-components'

test('render TabList', () => {
  const component = shallow(
    <Tab>
      <span>hi</span>
    </Tab>
  );
  expect(component).toMatchSnapshot();
})

test('custom ListStyle style', () => {
  const CustomTabStyle = TabStyle.extend`
    background-color: red;
  `;
  const component = shallow(
    <Tab customStyle={CustomTabStyle}>
      <span>hi</span>
    </Tab>
  );
  expect(component).toHaveStyleRule('background-color', 'red');  
})
