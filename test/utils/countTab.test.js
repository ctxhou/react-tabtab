import React from 'react';
import {Tabs, DragTabList, DragTab, TabList, Tab, PanelList, Panel} from '../../src';
import {mount} from 'enzyme';
import countTab from '../../src/utils/countTab';

test('count DragTab', () => {
  const count = countTab(mount(
    <Tabs>
      <DragTabList>
        <DragTab>DragTab1</DragTab>
        <DragTab>DragTab2</DragTab>
        <DragTab>DragTab3</DragTab>
      </DragTabList>
      <PanelList>
        <Panel>Content1</Panel>
        <Panel>Content2</Panel>
        <Panel>Content3</Panel>
      </PanelList>
    </Tabs>
  ));
  expect(count).toEqual(3);
})

test('count Tab', () => {
  const count = countTab(mount(
    <Tabs>
      <TabList>
        <Tab>Tab1</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab3</Tab>
      </TabList>
      {/*<PanelList>
        <Panel>Content1</Panel>
        <Panel>Content2</Panel>
        <Panel>Content3</Panel>
      </PanelList>*/}
    </Tabs>
  ));
  expect(count).toEqual(3);
})
