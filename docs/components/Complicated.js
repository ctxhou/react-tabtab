import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel, ExtraButton} from '../../src';
import Plus from 'react-icons/lib/fa/plus';
import {simpleSwitch} from '../../src/helpers/move';
import {makeData} from './utils';

export default class Complicated extends Component {
  constructor(props) {
    super(props);
    const tabs = makeData(100, 'Drag');

    this.state = {
      tabs,
      activeIndex: 0,
      numberOfTabs: tabs.length,
      showExtra: true,
      showModal: true,
      showArrow: true
    };
  }

  handleExtraButton = () => {
    const {tabs} = this.state;
    const newTabs = [...tabs, {title: 'New Draggable Tab', content: 'New Content'}];
    this.setState({tabs: newTabs, activeIndex: newTabs.length - 1});
  }

  handleTabChange = index => {
    this.setState({activeIndex: index});
  }

  handleTabSequenceChange = ({oldIndex, newIndex}) => {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
  }

  handleEdit = ({type, index}) => {
    this.setState((state) => {
      let {tabs, activeIndex} = state;
      if (type === 'delete') {
        tabs = [...tabs.slice(0, index), ...tabs.slice(index + 1)];
      }
      if (index - 1 >= 0) {
        activeIndex = index - 1;
      } else {
        activeIndex = 0;
      }
      return {tabs, activeIndex};
    });
  }

  handleChangeTabsNumber = e => {
    let number = e.target.value;
    if (number <= 0 || !number) {
      number = 1;
    }
    if (number > 3000) {
      number = 3000;
    }
    const tabs = makeData(number, 'Drag');
    this.setState({tabs, activeIndex: 0, numberOfTabs: number});
  }

  handleToggleExtra = e => {
    const showExtra = e.target.checked;
    this.setState({showExtra});
  }

  handleToggleModal = e => {
    const showModal = e.target.checked;
    this.setState({showModal});
  }

  handleToggleArrow = e => {
    const showArrow = e.target.checked;
    this.setState({showArrow});
  }

  render() {
    const {tabs, activeIndex, numberOfTabs, showArrow, showModal, showExtra} = this.state;
    const tabTemplate = [];
    const panelTemplate = [];
    tabs.forEach((tab, i) => {
      const closable = tabs.length > 1;
      tabTemplate.push(<DragTab key={i} closable={closable}>{tab.title}</DragTab>);
      panelTemplate.push(<Panel key={i}>{tab.content}</Panel>);
    })

    return (
      <div>
        <Tabs onTabEdit={this.handleEdit}
              onTabChange={this.handleTabChange}
              activeIndex={activeIndex}
              customStyle={this.props.customStyle}
              onTabSequenceChange={this.handleTabSequenceChange}
              showModalButton={showModal}
              showArrowButton={showArrow}
              ExtraButton={showExtra &&
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
        <form className="pa4">
          <fieldset id="favorite_movies" className="bn">
            <div className="flex items-center mb2">
              <label className="lh-copy">Number of tabs:</label>
              <input className="input-reset ba b--black-20 pa1 mb2 db ml2" type="number"
                     onChange={this.handleChangeTabsNumber}
                     value={numberOfTabs}/>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" value="extra" checked={showExtra} onChange={this.handleToggleExtra}/>
              <label htmlFor="extra" className="lh-copy">Show Extra Button</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" value="modal" checked={showModal} onChange={this.handleToggleModal}/>
              <label htmlFor="modal" className="lh-copy">Show Modal Button</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" value="arrow" checked={showArrow} onChange={this.handleToggleArrow}/>
              <label htmlFor="arrow" className="lh-copy">Show Arrow Button</label>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}