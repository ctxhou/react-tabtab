import React from 'react';
import {range} from 'lodash';
import {arrayMove} from 'react-sortable-hoc';
import countTab from './utils/countTab';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequence = this.handleTabSequence.bind(this);
    this.state = {
      activeIndex: this.getActiveIndex(props),
      tabSequence: range(countTab(props.children))
    };
  }

  getActiveIndex(props) {
    const {defaultIndex, activeIndex} = props;
    if (activeIndex)
      return activeIndex;
    if (defaultIndex)
      return defaultIndex
    return 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.setState({activeIndex: nextProps.activeIndex});
    }
  }

  handleTabChange(index) {
    const {activeIndex, onTabChange} = this.props;
    if (!activeIndex) {
      this.setState({activeIndex: index});
    }
    onTabChange(index);
  }

  handleTabSequence({oldIndex, newIndex}) {
    const {tabSequence} = this.state;
    const updateTabSequence = arrayMove(tabSequence, oldIndex, newIndex);
    this.setState({tabSequence: updateTabSequence, activeIndex: newIndex});
  }

  render() {
    const {children} = this.props;
    const {activeIndex, tabSequence} = this.state;
    const props = {
      handleTabChange: this.handleTabChange,
      handleTabSequence: this.handleTabSequence,
      activeIndex,
      tabSequence
    }
    return(
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}

Tabs.defaultProps = {
  onTabChange: () => {},
  onSequenceChange: () => {}
}