import React from 'react';
import { TabListStyle } from '../src/TabList';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import styled from 'styled-components';
import {BulletIcon, RightIcon} from '../src/IconSvg';

const tabListTest = (type, TabListComponent, TabComponent) => {
  const shareComponent = props => (
    <TabListComponent {...props} customStyle={{}}>
      <TabComponent>Tab1</TabComponent>
      <TabComponent>Tab2</TabComponent>
    </TabListComponent>
  );

  test(`render ${type} List`, () => {
    const component = mount(
      <TabListComponent customStyle={{}}>
        <TabComponent>Tab1</TabComponent>
      </TabListComponent>
    );
    expect(toJson(component)).toMatchSnapshot();
  })

  test('custom ListStyle style', () => {
    const CustomListStyle = styled(TabListStyle)`
      background-color: red;
    `;
    const component = mount(
      <TabListComponent customStyle={{CustomTabList: CustomListStyle}}>
        <TabComponent>Tab1</TabComponent>
      </TabListComponent>
    );
    expect(toJson(component)).toMatchSnapshot();  
  })

  describe('showModalButton', () => {
    const returnMountedButton = showModalButton => {
      const component = mount(shareComponent({showModalButton}));
      return component.find(BulletIcon);
    }

    it('default: true => show', () => {
      expect(returnMountedButton(true)).toHaveLength(1);
    })
    it('false', () => {
      expect(returnMountedButton(false)).toHaveLength(0);
    })
    describe('number', () => {
      it('2', () => {
        expect(returnMountedButton(2)).toHaveLength(1);
      })
      it('100', () => {
        expect(returnMountedButton(100)).toHaveLength(0);
      })

      it('show modal button when new tab is added', () => {
        const component = mount(shareComponent({showModalButton: 4}));
        expect(component.html().includes('svg')).toEqual(false);
        component.setProps({children: [
          <TabComponent key={1}>Tab1</TabComponent>,
          <TabComponent key={2}>Tab2</TabComponent>,
          <TabComponent key={3}>Tab3</TabComponent>,
          <TabComponent key={4}>Tab4</TabComponent>
        ]});
        expect(component.html().includes('svg')).toEqual(true);
      })
    })
  })

  describe('showArrowButton', () => {
    const returnMountedButton = showArrowButton => {
      const component = mount(shareComponent({showArrowButton}));
      return component.find(RightIcon);
    }
    // because in test env it's containerWidth = 0, it always show arrow
    it('auto', () => {
      expect(returnMountedButton('auto')).toHaveLength(1);
    })

    it('true', () => {
      expect(returnMountedButton(true)).toHaveLength(1);
    })

    it('false', () => {
      expect(returnMountedButton(false)).toHaveLength(0);
    })
  })
  // the reason to test closable button at TabList not at Tab component
  // is because `DragTab` need to be wrapped by `DragTabList`
  it('click close button', () => {
    const mockTabChange = jest.fn();
    const component = mount(
      <TabListComponent handleEdit={mockTabChange} customStyle={{}}>
        <TabComponent closable>Tab1</TabComponent>
        <TabComponent closable>Tab2</TabComponent>
      </TabListComponent>
    );
    const btn1 = component.find('CloseButton').at(1);
    btn1.simulate('click');
    expect(mockTabChange).toBeCalled();
    expect(mockTabChange.mock.calls[0][0]).toEqual({type: 'delete', index: 1});
  })
}

export default tabListTest;