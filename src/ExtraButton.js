// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  float: right;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 3px;
  margin-top: 10px;
  margin-left: 2px;
  display: inline-block;
  color: #777;
  vertical-align: middle;
  /* ${props => props.disabled ? `
    pointer-events: none;
    color: #AAA;
    background: #F5F5F5;
  ` 
  : null} */
  &:hover {
    color: black;
    cursor: pointer;
  }
  &:disabled,
  &[disabled]{
    border: 1px solid grey;
    background-color: #e7e7e7;
    cursor: not-allowed;
  }
`;

type Props = {
  onClick: (event: any) => void,
  disabled: boolean,
  children: React.Node
};

export default class ExtraButton extends React.PureComponent<Props> {
  static defaultProps = {
    disabled: false
  }

  render() {
    const {disabled, onClick} = this.props;
    return (
      <Wrapper onClick={onClick} disabled={disabled}>
        {this.props.children}          
      </Wrapper>
    );
  }
}
