import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';

const TabStyle = styled.div`
  display: ${props => props.vertical ? 'block': 'inline-block'};
  color: ${props => props.active ? 'black' : '#007bff'};
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  border: 1px solid transparent;
  ${props => props.vertical ?
    `
      border-bottom: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      background-color: white;
      padding: 10px 10px;
      &:first-child {
        border-top: 1px solid #efefef;        
      }
    `
  : props => props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;'
  }
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
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  &:hover {
    cursor: pointer;
    color: black;
    border-color: #ddd #ddd #fff;
  }
`;

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }

  clickTab() {
    const {handleTabChange, index} = this.props;
    handleTabChange(index);
  }

  clickDelete(event) {
    event.stopPropagation(); // prevent trigger clickTab event.
    const {handleEdit, index} = this.props;
    handleEdit({type: 'delete', index});
  }

  render() {
    const {customStyle, active, closable, vertical} = this.props;
    const TabComponent = customStyle || TabStyle;
    return (
      <TabComponent innerRef={node => this.__INTERNAL_NODE = node}
                    onClick={this.clickTab}
                    active={active}
                    vertical={vertical}
                    closable={closable}>
        {this.props.children}
        {closable ?
          <CloseButton handleDelete={this.clickDelete}/>
        : null}
      </TabComponent>
    )
  }
}

Tab.displayName = 'Tab';

export {
  TabStyle
};