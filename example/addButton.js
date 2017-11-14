import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel, ExtraButton} from '../src';
import {simpleSwitch} from '../src/helpers/move';
import Plus from 'react-icons/lib/fa/plus';

export default class AddButton extends Component {
  constructor(props) {
    super(props);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    this.handleExtraButton = this.handleExtraButton.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    const tabs = [];
    for (let i = 0; i < 50; i++) {
      tabs.push({title: `DragTab${i}`, panel: `Content${i}`})
    }
    this.state = {
      activeIndex: 0,
      tabs: tabs
    }
  }

  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
  }

  handleExtraButton() {
    const {tabs} = this.state;
    const newTabs = [...tabs, {title: 'New Tab', panel: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }

  handleTabChange(index) {
    this.setState({activeIndex: index});
  }

  render() {
    const {tabs, activeIndex} = this.state;
    const tabsTemplate = [];
    const panelTemplate = [];
    tabs.forEach((tab, index) => {
      tabsTemplate.push(<DragTab key={index}>{tab.title}</DragTab>)
      panelTemplate.push(<Panel key={index}>{tab.panel}</Panel>)
    })
    return (
      <Tabs activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
            onTabSequenceChange={this.handleTabSequenceChange}
            ExtraButton={
              <ExtraButton onClick={this.handleExtraButton}>
                <Plus/>
              </ExtraButton>
            }
            showModalButton={'5'}>
        <DragTabList>
          {tabsTemplate}
        </DragTabList>
        <PanelList>
          {panelTemplate}
        </PanelList>
      </Tabs>
    )
  }
}