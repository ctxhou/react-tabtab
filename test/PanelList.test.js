import React from 'react';
import PanelList from '../src/PanelList';
import Panel, {PanelStyle} from '../src/Panel';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

describe('render', () => {
  test('render one Panel', () => {
    const component = mount(
      <PanelList activeIndex={0}>
        <Panel>
          <span>panel content</span>
        </Panel>
      </PanelList>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('render multi Panel', () => {
    const component = mount(
      <PanelList activeIndex={1}>
        <Panel>
          <span>panel content</span>
        </Panel>
        <Panel>
          <span>panel content</span>
        </Panel>
        <Panel>
          <span>panel content</span>
        </Panel>
      </PanelList>
    );
    expect(toJson(component)).toMatchSnapshot();    
  });

  test('return null if no child', () => {
    const component = shallow(
      <PanelList>
      </PanelList>
    );
    expect(component.html()).toEqual(null);
  })
})

test('custom style', () => {
  const component = shallow(
    <PanelList activeIndex={1}
               customStyle={{
                 Panel: PanelStyle
               }}>
      <Panel>
        <span>panel content</span>
      </Panel>
    </PanelList>
  );
  expect(toJson(component)).toMatchSnapshot();
})