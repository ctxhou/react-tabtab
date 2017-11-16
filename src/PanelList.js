// @flow
import * as React from 'react';

type Props = {
  children: Array<any>,
  activeIndex?: number
};

export default class PanelList extends React.Component<Props> {
  render() {
    const {
      children,
      activeIndex,
      customStyle
    } = this.props;
    return (
      <div>
        {React.cloneElement(children[activeIndex], {activeIndex, CustomPanelStyle: customStyle.Panel})}
      </div>
    )
  }
}
