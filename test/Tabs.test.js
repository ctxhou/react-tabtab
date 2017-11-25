import React from 'react';
import {Tabs, DragTabList, DragTab, TabList, Tab, PanelList, Panel} from '../src';
import {shallow, mount} from 'enzyme';

const normalComponent = (props = {}) => (
  <Tabs {...props}>
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

const dragComponent = (props = {}) => (
  <Tabs {...props}>
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
  const testRender = (tabsComponent) => {
    const component = mount(tabsComponent);
    expect(component.html()).toMatchSnapshot();
  }
  it('normal tabs', () => {
    testRender(normalComponent())
  });
  it('normal drag tabs', () => {
    testRender(dragComponent());
  });
});

describe('props', () => {
  it('defaultIndex', () => {
    const defaultIndex = 1;
    const component = shallow(normalComponent({defaultIndex}));
    expect(component.state().activeIndex).toEqual(defaultIndex);
  })

  it('click tab, onTabChange callback', () => {
    const mockTabChange = jest.fn();
    const component = mount(normalComponent({onTabChange: mockTabChange}));
    component.find('Tab').at(1).simulate('click');
    expect(component.state().activeIndex).toEqual(1);
    expect(mockTabChange).toBeCalled();
    expect(mockTabChange.mock.calls[0][0]).toEqual(1);
  })

  describe('activeIndex', () => {
    it('show active index', () => {
      const mountComponent = mount(normalComponent({activeIndex: 1}));
      expect(mountComponent.state().activeIndex).toEqual(1);
    });

    it('do nothing when click tab', () => {
      const mockTabChange = jest.fn();
      const mountComponent = mount(normalComponent({onTabChange: mockTabChange, activeIndex: 1}));
      mountComponent.find('Tab').at(0).simulate('click');
      expect(mountComponent.state().activeIndex).toEqual(1);
    });

    it('update active tab when pass new activeKey', () => {
      const mockTabChange = jest.fn();
      const mountComponent = mount(normalComponent({onTabChange: mockTabChange, activeIndex: 1}));
      mountComponent.setProps({activeIndex: 0})
      expect(mountComponent.state().activeIndex).toEqual(0);
    })
  })
})
