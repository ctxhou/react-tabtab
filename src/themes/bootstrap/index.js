import styled from 'styled-components';
import {styled as themeStyled} from '../../';

let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = themeStyled;

TabListStyle = styled(TabListStyle)`
  border-bottom: 1px solid #eee;
`;

TabStyle = styled(TabStyle)`
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);
  color: ${props => props.active ? 'black' : '#007bff'};
  border: 1px solid transparent;
  ${props => props.vertical ?
    `
      border-top: 1px solid transparent;
      border-bottom: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      border-radius: 0;
      &:first-child {
        border-top: 1px solid #efefef;        
      }
    `
  : `
      &:hover {
        border-color: #ddd #ddd #fff;
      }
  `}
  ${props => props.active && props.vertical ?
    `
      background-color: #eee;
    `
  : null}
  ${props => props.active && !props.vertical ?
    `
      border-color: #ddd #ddd #fff;
    `
  : null}
`;

export default {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
}
