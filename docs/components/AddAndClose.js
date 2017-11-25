import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel, ExtraButton} from '../../src';
import Plus from 'react-icons/lib/fa/plus';
import {makeData} from './utils';

export default class Closable extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleExtraButton = this.handleExtraButton.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    const tabs = makeData(3);

    this.state = {
      tabs,
      activeIndex: 0
    };
  }

  handleExtraButton() {
    const {tabs} = this.state;
    const newTabs = [...tabs, {title: 'New Tab', content: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }

  handleTabChange(index) {
    this.setState({activeIndex: index});
  }

  handleEdit({type, index}) {
    let {tabs, activeIndex} = this.state;
    if (type === 'delete') {
      tabs.splice(index, 1);
    }
    if (index - 1 >= 0) {
      activeIndex = index - 1;
    } else {
      activeIndex = 0;
    }
    this.setState({tabs, activeIndex});
  }

  render() {
    const {tabs, activeIndex} = this.state;
    const tabTemplate = [];
    const panelTemplate = [];

    tabs.forEach((tab, i) => {
      const closable = tabs.length > 1;
      tabTemplate.push(<Tab key={i} closable={closable}>{tab.title}</Tab>);
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    })
    return (
      <Tabs onTabEdit={this.handleEdit}
            onTabChange={this.handleTabChange}
            activeIndex={activeIndex}
            customStyle={this.props.customStyle}
            ExtraButton={
              <ExtraButton onClick={this.handleExtraButton}>
                <Plus/>
              </ExtraButton>
            }>
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