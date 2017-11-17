import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel, ExtraButton} from '../../src';
import Plus from 'react-icons/lib/fa/plus';
import {simpleSwitch} from '../../src/helpers/move';
import {makeData} from './utils';

export default class Complicated extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleExtraButton = this.handleExtraButton.bind(this);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    const tabs = makeData(100, 'Drag');

    this.state = {
      tabs,
      activeIndex: 0
    };
  }

  handleExtraButton() {
    const {tabs} = this.state;
    const newTabs = [...tabs, {title: 'New Draggable Tab', content: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }

  handleTabChange(index) {
    this.setState({activeIndex: index});
  }

  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
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
      tabTemplate.push(<DragTab key={i} closable={closable}>{tab.title}</DragTab>);
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    })

    return (
      <Tabs onTabEdit={this.handleEdit}
            onTabChange={this.handleTabChange}
            activeIndex={activeIndex}
            customStyle={this.props.customStyle}
            onTabSequenceChange={this.handleTabSequenceChange}
            ExtraButton={
              <ExtraButton onClick={this.handleExtraButton}>
                <Plus/>
              </ExtraButton>
            }>
        <DragTabList>
          {tabTemplate}
        </DragTabList>
        <PanelList>
          {panelTemplate}
        </PanelList>
      </Tabs>
    )
  }
}