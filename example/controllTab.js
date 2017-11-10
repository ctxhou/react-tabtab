import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from '../src';

export default class ControllTab extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {
      activeIndex: 1
    };
  }

  handleTabChange(activeIndex) {
    this.setState({activeIndex});
  }

  render() {
    return (
      <Tabs activeIndex={this.state.activeIndex}
            onTabChange={this.handleTabChange}>
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