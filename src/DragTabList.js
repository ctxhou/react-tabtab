import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import TabList from './TabList';

const DragTabContainer = SortableContainer(({children, ...props}) => {
  return (
    <TabList {...props} distance={10}>
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
    const {activeIndex, handleActiveIndex} = this.props;
    if (oldIndex === newIndex) {
      if (activeIndex !== oldIndex) {
        handleActiveIndex(oldIndex);
      }
    }
  }

  render() {
    const {children, ...props} = this.props;
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='x'
                        {...props}>
        {children}
      </DragTabContainer>
    );
  }
}
