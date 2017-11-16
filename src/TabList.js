// @flow
import * as React from 'react';
import styled from 'styled-components';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import {isNumber} from 'lodash';
import TabModal from './TabModal';

const buttonWidth = 35;
const getPadding = ({showModalButton, showArrowButton}) => {
  let paddingLeft = 0;
  let paddingRight = 0;
  if (showModalButton) {
    paddingLeft += buttonWidth;
  }
  if (showArrowButton) {
    paddingLeft += buttonWidth;
    paddingRight += buttonWidth;
    if (showModalButton) {
      paddingLeft += 2;
    }
  }
  if (paddingLeft > 0) {
    paddingLeft += 3;
  }
  if (paddingRight > 0) {
    paddingRight += 3;
  }
  return `0 ${paddingRight}px 0 ${paddingLeft}px`;
}

const TabListStyle = styled.div`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  border-bottom: 1px solid #eee;
  padding: ${props => getPadding(props)};
`;

const ListInner = styled.div`
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

const ActionButtonStyle = styled.div`
  height: 100%;
  width ${buttonWidth}px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;
  background: #f9f9f9;
  > svg {
    padding-top: 15px;
  }
`;

const makeScrollButton = ActionButton => ActionButton.extend`
  display: inline-block;
  filter: none;
  position: absolute;
  ${props => props.left ?
    props.showModalButton ? `left: ${buttonWidth + 2}px`: `left: 0`
  : 'right: 0'
  };
  &:hover {
    cursor: pointer;
  }
`;

const makeFoldButton = ActionButton => ActionButton.extend`
  display: inline-block;
  filter: none;
  position: absolute;
  left: 0;
  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  customStyle?: Object,
  activeIndex?: number,
  showArrowButton?: 'auto' | boolean,
  showModalButton?: number | boolean,
  handleTabChange?: (event: any) => void,
  handleTabSequence?: (event: any) => void,
  handleEdit?: (event: any) => void,
  ExtraButton?: React.Element<*>,
  children: React.Node
};

type State = {
  modalIsOpen: boolean,
  showArrowButton: boolean,
  showModalButton: boolean | number
};

export default class TabListComponent extends React.Component<Props, State> {

  listContainer: React.ElementRef<any>;
  rightArrowNode: React.ElementRef<any>;
  leftArrowNode: React.ElementRef<any>;
  listScroll: React.ElementRef<any>;
  foldNode: React.ElementRef<any>;
  tabRefs: Array<HTMLElement>;
  scrollPosition: number;

  constructor(props: Props) {
    super(props);
    (this: any).handleScroll = this.handleScroll.bind(this);
    (this: any).toggleModal = this.toggleModal.bind(this);
    (this: any).renderTabs = this.renderTabs.bind(this);
    (this: any).isShowModalButton = this.isShowModalButton.bind(this);
    (this: any).isShowArrowButton = this.isShowArrowButton.bind(this);
    (this: any).scrollPosition = 0;
    (this: any).tabRefs = [];
    (this: any).state = {
      modalIsOpen: false,
      showArrowButton: false,
      showModalButton: false
    }
  }

  componentDidMount() {
    this.isShowArrowButton();
    this.isShowModalButton();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children.length !== this.props.children.length) {
      this.isShowArrowButton();
      this.isShowModalButton();
    }
    // if activeIndex is changed, and children is added
    // means => add new child
    if (prevProps.activeIndex !== this.props.activeIndex &&
        prevProps.children.length < this.props.children.length) {
      this.scrollToIndex(this.props.activeIndex);
    }
  }

  getTabNode(tab: any): React.ElementRef<any> {
    const tabType = tab.constructor.name;
    if (tabType === 'Tab') {
      return tab.__INTERNAL_NODE;
    } else if (tabType === 'DragTab') {
      return tab.__INTERNAL_NODE.node;
    }
  }

  unifyScrollMax(width: number) {
    return parseFloat((width / 3) * 2);
  }

  handleScroll(direction: 'right' | 'left') {
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
    } else if (direction === 'left') {
      leftMove = tabFirstOffset.left - containerOffset.left;
      if (-leftMove > containerWidth) {
        leftMove = - this.unifyScrollMax(containerWidth);
      }
    }
    this.scrollPosition += leftMove;
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }

    this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
  }

  scrollToIndex(index: number) {
    const tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
    const containerOffset = this.listContainer.getBoundingClientRect();
    const leftMove = tabOffset.right - containerOffset.right;
    this.scrollPosition += leftMove;
    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
    this.listScroll.style.transform = `translate3d(-${this.scrollPosition}px, 0, 0)`;
  }

  toggleModal(open: boolean) {
    this.setState({modalIsOpen: open}, () => {
      if (!open) {
        this.scrollToIndex(this.props.activeIndex);
      }
    });
  }

  isShowModalButton() {
    let {showModalButton} = this.props;
    if (isNumber(showModalButton)) {
      // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
      showModalButton = this.props.children.length >= showModalButton;
    }
    this.setState({showModalButton});
  }

  isShowArrowButton() {
    let {showArrowButton} = this.props;
    if (showArrowButton === 'auto') {
      let tabWidth = 0;
      const containerWidth = this.listContainer.offsetWidth;
      showArrowButton = false;
      for (let index = 0; index < this.tabRefs.length; index++) {
        const tab = this.getTabNode(this.tabRefs[index]);
        // $FlowFixMe
        tabWidth += tab.offsetWidth;
        if (tabWidth >= containerWidth) {
          showArrowButton = true;
          break;
        }
      }
    }
    this.setState({showArrowButton});
  }

  renderTabs(options?: any = {}, isModal?: boolean) {
    const {children, activeIndex, handleTabChange, handleEdit, customStyle} = this.props;
    const props = {
      handleTabChange,
      handleEdit,
      CustomTabStyle: customStyle.Tab
    };
    if (!isModal) {
      this.tabRefs = [];
    }
    return React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        key: index,
        active: index === activeIndex,
        index,
        tabIndex: index,
        ref: node => {
          if (!isModal && node) {
            this.tabRefs.push(node)
          }
        },
        ...props,
        ...options
      })
    ));
  }

  render() {
    const {
      customStyle,
      activeIndex,
      handleTabChange,
      handleTabSequence,
      ExtraButton
    } = this.props;
    const {modalIsOpen} = this.state;
    const TabList = customStyle.TabList || TabListStyle;
    const ActionButton = customStyle.ActionButton || ActionButtonStyle;
    const FoldButton = makeFoldButton(ActionButton);
    const ScrollButton = makeScrollButton(ActionButton);

    return (
      <div>
        {ExtraButton ? ExtraButton : null}
        <TabList hasExtraButton={!!ExtraButton}
                     showModalButton={this.state.showModalButton}
                     showArrowButton={this.state.showArrowButton}>
          {this.state.showModalButton ?
            <FoldButton innerRef={node => this.foldNode = node}
                        onClick={this.toggleModal.bind(this, true)}
                        showArrowButton={this.state.showArrowButton}>
              <MdFormatListBulleted/>
            </FoldButton>
          : null}
          {this.state.showArrowButton ?
            <div>
              <ScrollButton left
                            onClick={() => {this.handleScroll('left')}}
                            innerRef={node => this.leftArrowNode = node}
                            showModalButton={this.state.showModalButton}>
                <MdChevronLeft/>
              </ScrollButton>
              <ScrollButton onClick={() => {this.handleScroll('right')}}
                            innerRef={node => this.rightArrowNode = node}>
                <MdChevronRight/>
              </ScrollButton>
            </div>
          : null}
          <ListInner innerRef={node => this.listContainer = node}>
            <ListScroll innerRef={node => this.listScroll = node}>
              {this.renderTabs()}
            </ListScroll>
          </ListInner>
        </TabList>
        {modalIsOpen ?
          <TabModal closeModal={this.toggleModal.bind(this, false)}
                    handleTabSequence={handleTabSequence}
                    handleTabChange={handleTabChange}
                    activeIndex={activeIndex}>
            {this.renderTabs({vertical: true}, true)}
          </TabModal>
        : null}
      </div>
    )
  }
}

TabListComponent.displayName = 'TabList';

export {
  TabListStyle,
  ActionButtonStyle
}
