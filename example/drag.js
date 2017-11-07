import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel} from '../src';

export default class Drag extends Component {
  render() {
    return (
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
    )
  }
}