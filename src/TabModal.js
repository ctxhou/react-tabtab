import React from 'react';
import Modal from 'react-responsive-modal';
import {SortableContainer} from 'react-sortable-hoc';
import SortMethod from './SortMethod';

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
                        lockAxis='y'>
        {this.props.children}
      </DragTabContainer>
    );
  }
}

export default class TabModal extends React.Component {
  render() {
    return (
      <Modal open={true}
             onClose={this.props.closeModal}
             modalStyle={{minWidth: '20%', backgroundColor: 'rgb(249, 249, 249)'}}>
        <ModalTabListWrapper handleTabSequence={this.props.handleTabSequence}
                             handleTabChange={this.props.handleTabChange}>
          {this.props.children}
        </ModalTabListWrapper>
      </Modal>
    );
  }
}
