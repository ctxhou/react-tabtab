import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
  border-bottom: 1px solid #eee;
`;

export default class TabList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      customStyle,
      children,
      activeIndex,
      handleActiveIndex
    } = this.props;
    const props = {
      handleActiveIndex
    };
    const Wrapper = customStyle || ListStyle;
    return (
      <Wrapper>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            active: index === activeIndex,
            index,
            tabIndex: index,
            ...props
          });
        })}
      </Wrapper>
    )
  }
}

export {
  ListStyle
};