import React from 'react';
import styled from 'styled-components';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import TabModal from './TabModal';

const ListWrapper = styled.div`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  border-bottom: 1px solid #eee;
  padding: ${props => props.hasExtraButton ? '0 32px' : '0'};
`;

const ListStyle = styled.div`
  overflow: hidden;
`;

const ListScroll = styled.div`
  padding-left: 0;
  position: relative;
  margin: 0;
  list-style: none;
  display: inline-block;
  transition: transform .3s cubic-bezier(.42, 0, .58, 1);
`;

const ScrollButton = styled.div`
  display: inline-block;
  filter: none;
  position: absolute;
  ${props => props.left ?
    'left: 10px'
  : 'right: 0'
  };
  &:hover {
    cursor: pointer;
  }
`;

const FoldButton = styled.div`
  display: inline-block;
  filter: none;
  position: absolute;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;

export default class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollPosition = 0;
    this.tabRefs = [];
    this.state = {
      modalIsOpen: false
    }
  }

  getTabNode(tab) {
    const tabType = tab.constructor.name;
    if (tabType === 'Tab') {
      return tab.tab.__INTERNAL_NODE;
    } else if (tabType === 'DragTab') {
      return tab.__INTERNAL_NODE.node;
    }
  }

  unifyScrollMax(width) {
    return parseFloat((width / 3) * 2);
  }

  handleScroll(direction) {
    let leftMove = 0;
    const containerOffset = this.listContainer.getBoundingClientRect();
    const containerWidth = this.listContainer.offsetWidth;
    const tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
    const tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();
    if (direction === 'right') {
      leftMove = tabLastOffset.right - containerOffset.right;
      if (leftMove > containerWidth) {
        leftMove = this.unifyScrollMax(containerWidth);
      }
      this.scrollPosition += leftMove;
    } else if (direction === 'left') {
      leftMove = tabFirstOffset.left - containerOffset.left;
      if (-leftMove > containerWidth) {
        leftMove = - this.unifyScrollMax(containerWidth);
      }
      this.scrollPosition += leftMove;
    }

    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    } else if (this.scrollPosition > tabLastOffset.right) {
      this.scrollPosition = tabLastOffset.right - containerOffset.right;
    }

    this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
  }

  toggleModal(type) {
    this.setState({modalIsOpen: type});
  }

  render() {
    const {
      customStyle,
      children,
      activeIndex,
      handleTabChange,
      handleTabSequence,
      handleEdit,
      ExtraButton
    } = this.props;
    const {modalIsOpen} = this.state;
    const props = {
      handleTabChange,
      handleEdit
    };
    console.log('TabList:', activeIndex)
    const ListInner = customStyle || ListStyle;
    return (
      <div>
        {ExtraButton ? ExtraButton : null}
        <ListWrapper hasExtraButton={!!ExtraButton}>
          <FoldButton onClick={this.toggleModal.bind(this, true)}>
            <MdFormatListBulleted/>
          </FoldButton>
          <ScrollButton left onClick={() => {this.handleScroll('left')}}>
            <MdChevronLeft/>
          </ScrollButton>
          <ScrollButton onClick={() => {this.handleScroll('right')}}>
            <MdChevronRight/>
          </ScrollButton>
          <ListInner innerRef={node => this.listContainer = node}>
            <ListScroll innerRef={node => this.listScroll = node}>
              {React.Children.map(children, (child, index) => (
                React.cloneElement(child, {
                  key: index,
                  active: index === activeIndex,
                  index,
                  tabIndex: index,
                  ref: node => {
                    this.tabRefs.push(node)
                  },
                  ...props
                })
              ))}
            </ListScroll>
          </ListInner>
        </ListWrapper>
        {modalIsOpen ?
          <TabModal closeModal={this.toggleModal.bind(this, false)}
                    handleTabSequence={handleTabSequence}
                    handleTabChange={handleTabChange}
                    activeIndex={activeIndex}>
            {React.Children.map(children, (child, index) => (
              React.cloneElement(child, {
                key: index,
                active: index === activeIndex,
                vertical: true,
                index,
                tabIndex: index,
                ref: node => {
                  this.tabRefs.push(node)
                },
                ...props
              })
            ))}
          </TabModal>
        : null}
      </div>
    )
  }
}

TabList.displayName = 'TabList';

export {
  ListStyle
};