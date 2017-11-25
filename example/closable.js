import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from '../src';

export default class Closable extends Component {
  constructor(props) {
    super(props);
    this.onTabEdit = this.onTabEdit.bind(this);
  }

  onTabEdit({type, index}) {
    console.log(type, index);
  }

  render() {
    return (
      <Tabs onTabEdit={this.onTabEdit}>
        <TabList>
          <Tab closable>Tab1</Tab>
          <Tab closable>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    )
  }
}