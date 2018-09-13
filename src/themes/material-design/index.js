import styled from 'styled-components';
import {styled as themeStyled} from '../../';

let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = themeStyled;

TabListStyle = styled(TabListStyle)`
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  border: 0;
`;

TabStyle = styled(TabStyle)`
  color: rgba(238,110,115,0.7);
  transition: color .28s ease;
  border: 0;
  ${props => props.active && !props.vertical ?
    `
      border-bottom: 2px solid #f6b2b5;
    `
  : null}
  &:hover {
    background-color: transparent;
    color: #ee6e73;
    border-bottom: 2px solid #f6b2b5;
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
  border-left: 1px solid rgba(0,0,0,0.12);
  border-right: 1px solid rgba(0,0,0,0.12);
  border-bottom: 1px solid rgba(0,0,0,0.12);
  padding: 30px 30px;
  transition: box-shadow .25s, -webkit-box-shadow .25s;
  border-radius: 2px;
`;

export default {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
}
