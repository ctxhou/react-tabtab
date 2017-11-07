import React from 'react';
import styled from 'styled-components';

const TabStyle = styled.div`
  display: inline-block;
  color: ${props => props.active ? '#007bff' : 'black'};
  border-bottom: ${props => props.active ? '2px solid #007bff' : '1px solid #eee'};
  padding: 5px 10px;
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
  &:hover {
    cursor: pointer;
    color: #007bff;
  }
`;

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
  }

  clickTab() {
    const {handleActiveIndex, index} = this.props;
    console.log(index)
    handleActiveIndex(index);
  }

  render() {
    const {customStyle, active} = this.props;
    // console.log(this.props)
    const TabComponent = customStyle || TabStyle;
    return (
      <TabComponent onClick={this.clickTab} active={active}>
        {this.props.children}
      </TabComponent>
    )
  }
}

export {
  TabStyle
};