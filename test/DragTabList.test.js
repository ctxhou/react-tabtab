import React from 'react';
import {mount} from 'enzyme';
import DragTabList from '../src/DragTabList';
import DragTab from '../src/DragTab';
import tabListTest from './tabListTest';
import toJson from 'enzyme-to-json';

describe('DragTabList', () => {
  tabListTest('DragTab', DragTabList, DragTab);

  test('DragTabList should have required props', () => {
    const component = mount(
      <DragTabList customStyle={{}}>
        <DragTab>Tab1</DragTab>
      </DragTabList>
    );
    expect(typeof toJson(component).node.rendered.props.pressDelay).toBe('number');
  })
});

