import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from '../src';

export default class Simple extends Component {
  render() {
    return (
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
    )
  }
}