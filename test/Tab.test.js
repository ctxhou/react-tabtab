import React from 'react';
import styled from 'styled-components';
import {mount} from 'enzyme';
import 'jest-styled-components'

import Tab, {TabStyle} from '../src/Tab';

describe('Tab', () => {
  describe('render TabList', () => {
    it('render pure text', () => {
      const component = mount(
        <Tab>
          tab
        </Tab>
      );
      expect(component.html()).toMatchSnapshot();
    })

    it('render component.', () => {
      const component = mount(
        <Tab>
          <span>
            <i className="fa fa-icon"></i>
            tab
          </span>
        </Tab>
      );
      expect(component.html()).toMatchSnapshot();
    })
  })

  describe('event', () => {
    it('onClick', () => {
      const mockHandleClick = jest.fn();
      const tabKey = 1;
      const component = mount(
        <Tab index={tabKey}
             handleTabChange={mockHandleClick}>
          text
        </Tab>
      );
      component.find('Tab').simulate('click');
      expect(mockHandleClick).toBeCalled();
      expect(mockHandleClick.mock.calls[0][0]).toEqual(tabKey);
    })
  })

  test('custom ListStyle style', () => {
    const CustomTabStyle = styled(TabStyle)`
      background-color: red;
    `;
    const component = mount(
      <Tab CustomTabStyle={CustomTabStyle}>
        <span>tab</span>
      </Tab>
    );
    expect(component).toHaveStyleRule('background-color', 'red');  
  })
})

