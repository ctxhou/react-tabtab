import React from 'react';
import Modal from 'react-modal';
import {SortableContainer} from 'react-sortable-hoc';
import SortMethod from './SortMethod';

const DragTabContainer = SortableContainer(({children}) => {
  return (
    <div>
      {children}
    </div>
  );
});

class ModalTabListWrapper extends SortMethod {
  render() {
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='y'
                        lockAxis='y'>
        {this.props.children}
      </DragTabContainer>
    );
  }
}

export default class TabModal extends React.Component {
  render() {
    return (
      <Modal isOpen={true}
             contentLabel="Modal"
             shouldCloseOnOverlayClick={true}
             onRequestClose={this.props.closeModal}>
        <button onClick={this.props.closeModal}>close</button>
        <ModalTabListWrapper handleTabSequence={this.props.handleTabSequence}
                             handleTabChange={this.props.handleTabChange}>
          {this.props.children}
        </ModalTabListWrapper>
      </Modal>
    );
  }
}
