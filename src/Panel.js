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
  ${props => !props.active ? `display: none;` : null}
`;

type Props = {
  children: React.Node,
  CustomPanelStyle: () => void,
  active: boolean,
  index: number
};

export default class PanelComponent extends React.PureComponent<Props> {
  render() {
    const {active, index} = this.props;
    const Panel = this.props.CustomPanelStyle || PanelStyle;
    return (
      <Panel role="tabpanel"
             id={`react-tabtab-panel-${index}`}
             aria-labelledby={`react-tabtab-${index}`}
             aria-hidden={false}
             active={active}>
        {active ?
          this.props.children
        : null}
      </Panel>
    )
  }
}

export {
  PanelStyle
}