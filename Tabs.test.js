import React from 'react';
import Tabs from '../src/Tabs';
import {shallow} from 'enzyme';

test('render Tabs', () => {
  const component = shallow(<Tabs/>);
  expect(component.find('div').length).toEqual(1);
})
