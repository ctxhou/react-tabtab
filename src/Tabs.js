import React from 'react';
import {range} from 'lodash';
import {arrayMove} from 'react-sortable-hoc';
import countTab from './utils/countTab';
// import DragTab from './DragTab';
// import Tab from './Tab';
// import FunctionTab from './FunctionTab';
// import classNames from 'classnames';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveIndex = this.handleActiveIndex.bind(this);
    this.handleTabSequence = this.handleTabSequence.bind(this);
    this.state = {
      activeIndex: props.defaultIndex || 0,
      tabSequence: range(countTab(props.children))
    };
  }

  handleActiveIndex(index) {
    this.setState({activeIndex: index});
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
      handleActiveIndex: this.handleActiveIndex,
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