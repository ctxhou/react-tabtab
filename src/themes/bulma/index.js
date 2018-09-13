import styled from 'styled-components';
import {styled as themeStyled} from '../../';

let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = themeStyled;

TabListStyle = styled(TabListStyle)`
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
`;

TabStyle = styled(TabStyle)`
  position: relative;
  color: #4a4a4a;
  border: 0;
  padding: 13px 19px;
  margin-bottom: -1px;
  &::after {
    z-index: 10;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 2px;
    background: #dbdbdb;
  }
  ${props => props.active && !props.vertical ?
    `
      &::after {
        background: #3273dc;
      }
    `
  : null}
  &:hover::after {
    background: #3273dc;
  }
`;

ActionButtonStyle = styled(ActionButtonStyle)`
  background-color: transparent;
  border-radius: 0;
  &:hover {
    background-color: #eee;
  }
`;

PanelStyle = styled(PanelStyle)`
`;

export default {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
}
