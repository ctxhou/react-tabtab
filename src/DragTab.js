import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import Tab from './Tab';

const DragTabElement = SortableElement(({children, ...props}) => {
  return (
    <Tab index={props.tabIndex} {...props}>
      {children}
    </Tab>
  )
});

class DragTab extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <DragTabElement {...props}>
        {children}
      </DragTabElement>
    )
  }
}

export default DragTab;