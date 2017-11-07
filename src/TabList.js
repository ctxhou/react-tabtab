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
      handleActiveIndex,
      tabSequence
    } = this.props;
    const props = {
      handleActiveIndex
    };
    const Wrapper = customStyle || ListStyle;
    // console.log('tabList:', tabSequence, activeIndex)
    return (
      <Wrapper>
        {tabSequence.map((seq, index) => {
          return React.cloneElement(children[seq], {
            key: index,
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

TabList.displayName = 'TabList';

export {
  ListStyle
};