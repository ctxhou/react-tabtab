// @flow
import * as React from 'react';

type Props = {
  handleTabChange?: (event: any) => void,
  handleTabSequence?: (event: any) => void,
  activeIndex?: number,
  children: React.Node
};

export default class SortMethod extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) {
    const {activeIndex, handleTabChange, handleTabSequence} = this.props;
    if (oldIndex === newIndex) {
      if (activeIndex !== oldIndex) {
        //$FlowFixMe
        handleTabChange(oldIndex);
      }
    } else {
      //$FlowFixMe
      handleTabSequence({oldIndex, newIndex});
    }
  }
}