import React from 'react';
import {Tabs, DragTabList, DragTab, TabList, Tab, PanelList, Panel} from '../src';
import {shallow, mount} from 'enzyme';

const normalComponent = (
  <Tabs>
    <TabList>
      <Tab>Tab1</Tab>
      <Tab>Tab2</Tab>
    </TabList>
    <PanelList>
      <Panel>Content1</Panel>
      <Panel>Content2</Panel>
    </PanelList>
  </Tabs>
);

const dragComponent = (
  <Tabs>
    <DragTabList>
      <DragTab>DragTab1</DragTab>
      <DragTab>DragTab2</DragTab>
    </DragTabList>
    <PanelList>
      <Panel>Content1</Panel>
      <Panel>Content2</Panel>
    </PanelList>
  </Tabs>
);

describe('render Tabs', () => {
  it('normal tabs', () => {
    const component = mount(normalComponent);
    expect(component.html()).toMatchSnapshot();
  });
  it('normal drag tabs', () => {
    const component = mount(dragComponent);
    expect(component.html()).toMatchSnapshot();
  });
});

describe('props', () => {
  it('defaultIndex', () => {
    const defaultIndex = 1;
    const component = shallow(
      <Tabs defaultIndex={defaultIndex}>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    );
    expect(component.state().activeIndex).toEqual(defaultIndex);
  })
})
