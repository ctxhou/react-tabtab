import React from 'react';
import classNames from 'classnames';
import Tappable from 'react-tappable';

export default class FunctionTab extends React.Component {
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
    var tabClass;

    tabClass = classNames(this.props.style + 'tab', 'add');
    // only show the delete button when it's active

    return (
      <span>
        <li className={tabClass} onClick={this.clickTab}>
          {this.props.title}
        </li>
      </span>
    );
  }
};