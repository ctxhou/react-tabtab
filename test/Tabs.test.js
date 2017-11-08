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

  it('click tab, onTabChange callback', () => {
    const mockTabChange = jest.fn();
    const component = mount(
      <Tabs onTabChange={mockTabChange}>
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
    component.find('Tab').at(1).simulate('click');
    expect(component.state().activeIndex).toEqual(1);
    expect(mockTabChange).toBeCalled();
    expect(mockTabChange.mock.calls[0][0]).toEqual(1);
  })

  describe('activeIndex', () => {
    const component = mockTabChange => (
      <Tabs activeIndex={1}
            onTabChange={mockTabChange}>
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

    it('show active index', () => {
      const mountComponent = mount(component());
      expect(mountComponent.state().activeIndex).toEqual(1);
    });

    it('do nothing when click tab', () => {
      const mockTabChange = jest.fn();
      const mountComponent = mount(component(mockTabChange));
      mountComponent.find('Tab').at(0).simulate('click');
      expect(mountComponent.state().activeIndex).toEqual(1);
    });

    it('update active tab when pass new activeKey', () => {
      const mockTabChange = jest.fn();
      const mountComponent = mount(component(mockTabChange));
      mountComponent.setProps({activeIndex: 0})
      expect(mountComponent.state().activeIndex).toEqual(0);
    })
  })
})
