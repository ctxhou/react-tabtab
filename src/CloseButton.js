// @flow
import * as React from 'react';
import {CloseIcon} from './IconSvg';
import styled from 'styled-components';

const CloseWrapper = styled.div`
  display: inline-block;
  color: #777;
  margin-left: 3px;
  padding-bottom: 2px;
  vertical-align: middle;
  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);
  &:hover {
    color: black;
    background-color: #eee;
    cursor: pointer;
  }
  > svg {
    vertical-align: middle;
  }
`;

type Props = {
  handleDelete: (event: any) => void
};

export default class CloseButton extends React.PureComponent<Props> {
  render() {
    return (
      <CloseWrapper onClick={this.props.handleDelete}>
        <CloseIcon/>        
      </CloseWrapper>
    );
  }
}
