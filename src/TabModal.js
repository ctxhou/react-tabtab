import React from 'react';
import Modal from 'react-modal';
import {SortableContainer} from 'react-sortable-hoc';
import SortMethod from './SortMethod';

const DragTabContainer = SortableContainer(({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
});

class ModalTabListWrapper extends SortMethod {
  render() {
    const {children, ...props} = this.props;
    return (
      <DragTabContainer onSortEnd={this.onSortEnd}
                        axis='y'
                        lockAxis='y'
                        {...props}>
        {children}
      </DragTabContainer>
    );
  }
}

export default class TabModal extends React.Component {
  render() {
    return (
      <Modal isOpen={true}
             contentLabel="Modal">
        <button onClick={this.props.closeModal}>close</button>
        <ModalTabListWrapper handleTabSequence={this.props.handleTabSequence}
                             handleTabChange={this.props.handleTabChange}>
          {this.props.children}
        </ModalTabListWrapper>
      </Modal>
    );
  }
}
