import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel} from '../src';
import {simpleSwitch} from '../src/helpers/move';

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    this.state = {
      activeIndex: 0,
      tabs: [
        {title: 'DragTab1', panel: 'Content1'},
        {title: 'DragTab2', panel: 'Content2'},
        {title: 'DragTab3', panel: 'Content3'}
      ]
    }
  }

  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
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
            onTabSequenceChange={this.handleTabSequenceChange}>
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