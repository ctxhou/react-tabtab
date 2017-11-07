import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import TabList from './TabList';

const DragTabContainer = SortableContainer(({children, ...props}) => {
  return (
    <TabList {...props}>
      {children}
    </TabList>
  );
});

export default class DragTabList extends React.Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    const {activeIndex, handleActiveIndex, handleTabSequence} = this.props;
    if (oldIndex === newIndex) {
      if (activeIndex !== oldIndex) {
        handleActiveIndex(oldIndex);
      }
    } else {
      console.log('switch: ', oldIndex, newIndex)
      handleTabSequence({oldIndex, newIndex})
    }
  }

  render() {
    const {children, ...props} = this.props; // eslint-disable-line
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='x'
                        lockAxis='x'
                        {...props}>
        {children}
      </DragTabContainer>
    );
  }
}

DragTabList.displayName = 'DragTabList';
