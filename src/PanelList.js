// @flow
import * as React from 'react';

type Props = {
  children: Array<any>,
  activeIndex?: number,
  customStyle?: {
    Panel?: React.Element<*>
  }
};

export default class PanelList extends React.Component<Props> {
  render() {
    const {
      children,
      activeIndex,
      customStyle
    } = this.props;
    if (!children || activeIndex === undefined) {
      return null;
    }

    let props = {activeIndex};
    if (customStyle && customStyle.Panel) {
      props = {...props, CustomPanelStyle: customStyle.Panel}
    }

    const child = children[activeIndex];
    return (
      <div>
        {React.cloneElement(child, props)}
      </div>
    )
  }
}
