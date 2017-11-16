import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from '../../src';
import {makeData} from './utils';

export default class Closable extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    const tabs = makeData(3);

    this.state = {
      tabs
    };
  }

  handleEdit({type, index}) {
    const {tabs} = this.state;
    if (type === 'delete') {
      tabs.splice(index, 1);
    }

    this.setState({tabs});
  }

  render() {
    const {tabs} = this.state;
    const tabTemplate = [];
    const panelTemplate = [];

    tabs.forEach((tab, i) => {
      const closable = tabs.length > 1;
      tabTemplate.push(<Tab key={i} closable={closable}>{tab.title}</Tab>);
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    })
    return (
      <Tabs onTabEdit={this.handleEdit}>
        <TabList>
          {tabTemplate}
        </TabList>
        <PanelList>
          {panelTemplate}
        </PanelList>
      </Tabs>
    )
  }
}