import React from 'react';
import TabList, { ListStyle } from '../src/TabList';
import Tab from '../src/Tab';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components'
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import MdChevronRight from 'react-icons/lib/md/chevron-right';

const shareComponent = props => (
  <TabList {...props}>
    <Tab>Tab1</Tab>
    <Tab>Tab2</Tab>
  </TabList>
);

test('render TabList', () => {
  const component = mount(
    <TabList>
      <Tab>Tab1</Tab>
    </TabList>
  );
  expect(toJson(component)).toMatchSnapshot();
})

test('custom ListStyle style', () => {
  const CustomListStyle = ListStyle.extend`
    background-color: red;
  `;
  const component = mount(
    <TabList customStyle={CustomListStyle}>
      <Tab>Tab1</Tab>
    </TabList>
  );
  expect(toJson(component)).toMatchSnapshot();  
})

describe('showModalButton', () => {
  const returnMountedDisplay = showModalButton => {
    const component = mount(shareComponent({showModalButton}));
    const buttonWrapper = component.find(MdFormatListBulleted).closest('div');
    return buttonWrapper.instance().style.display;
  }

  it('default: true => show', () => {
    expect(returnMountedDisplay(true)).toEqual('block');
  })
  it('false', () => {
    expect(returnMountedDisplay(false)).toEqual('none');
  })
  describe('number', () => {
    it('2', () => {
      expect(returnMountedDisplay(2)).toEqual('block');
    })
    it('100', () => {
      expect(returnMountedDisplay(100)).toEqual('none');
    })

    it('show modal button when new tab is added', () => {
      const component = mount(shareComponent({showModalButton: 4}));
      component.setProps({children: [
        <Tab>Tab1</Tab>,
        <Tab>Tab2</Tab>,
        <Tab>Tab3</Tab>,
        <Tab>Tab4</Tab>
      ]});
      const buttonWrapper = component.find(MdFormatListBulleted).closest('div');
      expect(buttonWrapper.instance().style.display).toEqual('block');
    })
  })
})

describe('showArrowButton', () => {
  const returnMountedDisplay = showArrowButton => {
    const component = mount(shareComponent({showArrowButton}));
    const buttonWrapper = component.find(MdChevronRight).closest('div');
    return buttonWrapper.instance().style.display;
  }
  // because in test env it's containerWidth = 0, it always show arrow
  it('auto', () => {
    expect(returnMountedDisplay('auto')).toEqual('block');
  })

  it('true', () => {
    expect(returnMountedDisplay(true)).toEqual('block');
  })

  it('false', () => {
    expect(returnMountedDisplay(false)).toEqual('none');
  })
})