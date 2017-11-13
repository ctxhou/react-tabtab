import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequence = this.handleTabSequence.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      activeIndex: this.getActiveIndex(props)
    };
  }

  getActiveIndex(props) {
    const {defaultIndex, activeIndex} = props;
    if (activeIndex)
      return activeIndex;
    if (defaultIndex)
      return defaultIndex;
    return 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.setState({activeIndex: nextProps.activeIndex});
    }
  }

  handleTabChange(index) {
    const {activeIndex, onTabChange} = this.props;
    if (activeIndex !== 0 && !activeIndex) {
      this.setState({activeIndex: index});
    }
    onTabChange(index);
  }

  handleTabSequence({oldIndex, newIndex}) {
    const {onTabSequenceChange} = this.props;
    onTabSequenceChange({oldIndex, newIndex});
  }

  handleEdit({type, index}) {
    const {onTabEdit} = this.props;
    if (onTabEdit) {
      onTabEdit({type, index});
    }
  }

  render() {
    const {children, ExtraButton} = this.props;
    const {activeIndex} = this.state;
    const props = {
      handleTabChange: this.handleTabChange,
      handleTabSequence: this.handleTabSequence,
      handleEdit: this.handleEdit,
      activeIndex,
      ExtraButton
    }
    return(
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, props);
        })}
      </div>
    )
  }
}

Tabs.defaultProps = {
  onTabChange: () => {},
  onSequenceChange: () => {}
}