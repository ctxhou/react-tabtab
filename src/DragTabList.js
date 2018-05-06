// @flow
import React from 'react';
import SortMethod from './SortMethod';
import {SortableContainer} from 'react-sortable-hoc';
import TabList from './TabList';

const DragTabContainer = SortableContainer(({children, ...props}) => {
  return (
    <TabList {...props}>
      {children}
    </TabList>
  );
});

export default class DragTabList extends SortMethod {
  render() {
    const {children, ...props} = this.props;
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='x'
                        lockAxis='x'
                        // if no pressDelay, close button cannot be triggered,
                        // because it would always treat click as dnd action
                        pressDelay={100}
                        {...props}>
        {children}
      </DragTabContainer>
    );
  }
}

DragTabList.displayName = 'DragTabList';