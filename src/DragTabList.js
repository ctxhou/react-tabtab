// @flow
import React from "react";
import SortMethod from "./SortMethod";
import { SortableContainer } from "react-sortable-hoc";
import TabList from "./TabList";

const DragTabContainer = SortableContainer(({ children, ...props }) => {
  return <TabList {...props}>{children}</TabList>;
});

type State = {
  isDragging: boolean
};

export default class DragTabList extends SortMethod<State> {
  constructor(props) {
    super(props);
    (this: any).state = {
      isDragging: false
    };
  }

  handleSortStart = () => {
    this.setState({ isDragging: true });
  };

  handleSortEnd = e => {
    this.setState({ isDragging: false });
    this.onSortEnd(e);
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <DragTabContainer
        onSortStart={this.handleSortStart}
        onSortEnd={this.handleSortEnd}
        axis="x"
        lockAxis="x"
        // if no pressDelay, close button cannot be triggered,
        // because it would always treat click as dnd action
        pressDelay={100}
        isDragging={this.state.isDragging}
        {...props}
      >
        {children}
      </DragTabContainer>
    );
  }
}

DragTabList.displayName = "DragTabList";
