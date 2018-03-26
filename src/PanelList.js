// @flow
import * as React from 'react';

type Props = {
  children: Array<any>,
  activeIndex: number,
  customStyle: {
    Panel: () => void
  }
};

export default class PanelList extends React.PureComponent<Props> {
  render() {
    const {
      children,
      activeIndex,
      customStyle
    } = this.props;
    if (!children || activeIndex === undefined) {
      return null;
    }

    let props = {};
    if (customStyle && customStyle.Panel) {
      props = {...props, CustomPanelStyle: customStyle.Panel}
    }

    // to prevent the type of one children is object type
    const result = React.Children.toArray(children).map((child, index) => (
      React.cloneElement(child, {
        key: index,
        active: index === activeIndex,
        index,
        ...props
      })
    ));
    return <div>{result}</div>
  }
}
