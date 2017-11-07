import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel} from '../src';

export default class Drag extends Component {
  render() {
    return (
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
    )
  }
}