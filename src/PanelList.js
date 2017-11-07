import React from 'react';

export default class PanelList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      activeIndex,
      tabSequence
    } = this.props;
    return (
      <div>
        {React.cloneElement(children[tabSequence[activeIndex]])}
      </div>
    )
  }
}
