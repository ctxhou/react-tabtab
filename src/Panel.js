import React from 'react'
import styled, {keyframes} from 'styled-components';

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

const PanelStyle = styled.div`
  padding: 10px 5px;
  animation: ${fadeOut} 0.2s linear;
  transition: all 1s linear;
`;

export default class Panel extends React.Component {
  render() {
    return (
      <PanelStyle>
        {this.props.children}
      </PanelStyle>
    )
  }
}
