// @flow
import * as React from 'react';
import Modal from 'react-responsive-modal';
import {SortableContainer} from 'react-sortable-hoc';
import SortMethod from './SortMethod';

type Props = {
  closeModal: (event: any) => void,
  handleTabSequence: (event: any) => void,
  handleTabChange: (event: any) => void,
  children: React.Node,
  activeIndex: number
};

const DragTabContainer = SortableContainer(({children}) => {
  return (
    <div style={{marginTop: '30px'}}>
      {children}
    </div>
  );
});

class ModalTabListWrapper extends SortMethod {
  render() {
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='y'
                        lockAxis='y'
                        distance={2}>
        {this.props.children}
      </DragTabContainer>
    );
  }
}

export default class TabModal extends React.Component<Props> {
  render() {
    return (
      <Modal open={true}
             onClose={this.props.closeModal}
             modalStyle={{minWidth: '20%', backgroundColor: 'rgb(249, 249, 249)'}}>
        <ModalTabListWrapper handleTabSequence={this.props.handleTabSequence}
                             handleTabChange={this.props.handleTabChange}
                             activeIndex={this.props.activeIndex}>
          {this.props.children}
        </ModalTabListWrapper>
      </Modal>
    );
  }
}
