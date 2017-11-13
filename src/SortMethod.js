import React from 'react';

export default class SortMethod extends React.Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    const {activeIndex, handleTabChange, handleTabSequence} = this.props;
    if (oldIndex === newIndex) {
      if (activeIndex !== oldIndex) {
        handleTabChange(oldIndex);
      }
    } else {
      handleTabSequence({oldIndex, newIndex})
    }
  }
}