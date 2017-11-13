import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';

const TabStyle = styled.div`
  display: ${props => props.vertical ? 'block': 'inline-block'};
  color: ${props => props.active ? '#007bff' : 'black'};
  border-bottom: ${props => props.active ? '2px solid #007bff' : '0'};
  padding: 5px 10px;
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  &:hover {
    cursor: pointer;
    color: #007bff;
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
                    vertical={vertical}>
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