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
  const returnMountedButton = showModalButton => {
    const component = mount(shareComponent({showModalButton}));
    return component.find(MdFormatListBulleted);
  }

  it('default: true => show', () => {
    expect(returnMountedButton(true).length).toEqual(1);
  })
  it('false', () => {
    expect(returnMountedButton(false).length).toEqual(0);
  })
  describe('number', () => {
    it('2', () => {
      expect(returnMountedButton(2).length).toEqual(1);
    })
    it('100', () => {
      expect(returnMountedButton(100).length).toEqual(0);
    })

    it('show modal button when new tab is added', () => {
      const component = mount(shareComponent({showModalButton: 4}));
      expect(component.state().showModalButton).toEqual(false);
      component.setProps({children: [
        <Tab>Tab1</Tab>,
        <Tab>Tab2</Tab>,
        <Tab>Tab3</Tab>,
        <Tab>Tab4</Tab>
      ]});
      expect(component.state().showModalButton).toEqual(true);
    })
  })
})

describe('showArrowButton', () => {
  const returnMountedButton = showArrowButton => {
    const component = mount(shareComponent({showArrowButton}));
    return component.find(MdChevronRight);
  }
  // because in test env it's containerWidth = 0, it always show arrow
  it('auto', () => {
    expect(returnMountedButton('auto').length).toEqual(1);
  })

  it('true', () => {
    expect(returnMountedButton(true).length).toEqual(1);
  })

  it('false', () => {
    expect(returnMountedButton(false).length).toEqual(0);
  })
})