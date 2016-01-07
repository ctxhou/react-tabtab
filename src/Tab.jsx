import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Tappable from 'react-tappable';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';

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

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabDeleteButton = this.handleTabDeleteButton.bind(this);
    this.clickTab = this.clickTab.bind(this);
  }

  handleTabDeleteButton(e) {
    e.stopPropagation(); //prevent trigger clickTab function
    this.props.handleTabDeleteButton(this.props.tabKey);
  }

  clickTab() {
    this.props.handleTabClick(this.props.tabKey);
  }

  render() {
    let tabClass,
        closeButtonStyle;
    const {connectDragSource, connectDropTarget } = this.props;
    if (this.props.status === 'active') {
      tabClass = classNames(this.props.style + 'tab', 'active');
    } else {
      tabClass = classNames(this.props.style + 'tab');
    }

    // only show the delete button when it's active
    if (this.props.tabDeleteButton && this.props.status === "active") {
      closeButtonStyle = {display: 'inline-block'};
    } else {
      closeButtonStyle = {display: 'none'};
    }


    return connectDragSource(connectDropTarget(
      <span>
        <li className={tabClass} onClick={this.clickTab}>
          {this.props.title}
          <div className="tabtab__folder__circCont" style={closeButtonStyle}>
            <div className="tabtab__folder__circle" onClick={this.handleTabDeleteButton}></div>
          </div>
        </li>
      </span>
    ));
  }
}