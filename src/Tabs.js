import React from 'react';
// import DragTab from './DragTab';
// import Tab from './Tab';
// import FunctionTab from './FunctionTab';
// import classNames from 'classnames';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveIndex = this.handleActiveIndex.bind(this);
    this.state = {
      activeIndex: props.defaultIndex || 0
    }
  }

  handleActiveIndex(index) {
    this.setState({activeIndex: index});
  }

  render() {
    const {activeIndex} = this.state;
    const props = {
      handleActiveIndex: this.handleActiveIndex,
      activeIndex
    }
    return(
      <div>
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}