import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Tab from './Tab';

const tabSource = {
  beginDrag: function(props) {
    props.beginDrag();
    return {
      tabKey: props.tabKey
    }
  }
}

// reference from https://github.com/gaearon/react-dnd/tree/master/examples/04%20Sortable/Simple
const tabTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().tabKey;
    const hoverIndex = props.tabKey;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

    // Get horizontal middle
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    const hoverClientX = hoverBoundingRect.right - clientOffset.x;

    // Dragging left
    if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
      return;
    }

    // Dragging right
    if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
      return;
    }

    props.moveTab(dragIndex, hoverIndex);
    // change the dragging tab index
    monitor.getItem().tabKey = hoverIndex;
  }
};

@DropTarget(ItemTypes.TAB, tabTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.TAB, tabSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

export default class DragTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const {connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <span>
        <Tab {...this.props}/>
      </span>
    ));
  }
}