import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, Tab, PanelList, Panel} from '../src';

export default class Drag extends Component {
  render() {
    return (
      <Tabs>
        <DragTabList>
          <DragTab>DragTab1</DragTab>
          <Tab>Tab2</Tab>
          <DragTab>DragTab3</DragTab>
        </DragTabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
          <Panel>Content3</Panel>
        </PanelList>
      </Tabs>
    )
  }
}