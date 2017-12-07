// @flow
import * as React from 'react'
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
  background-color: white;
  text-align: left;
  padding: 20px 15px;
  animation: ${fadeOut} 0.2s linear;
  transition: all 1s linear;
`;

type Props = {
  children: React.Node,
  CustomPanelStyle?: () => void
};

export default class PanelComponent extends React.Component<Props> {
  render() {
    const Panel = this.props.CustomPanelStyle || PanelStyle;
    return (
      <Panel>
        {this.props.children}
      </Panel>
    )
  }
}

export {
  PanelStyle
}