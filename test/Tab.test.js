import React from 'react';
import Tab, {TabStyle} from '../src/Tab';
import {shallow, mount} from 'enzyme';
import 'jest-styled-components'

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
    const CustomTabStyle = TabStyle.extend`
      background-color: red;
    `;
    const component = shallow(
      <Tab customStyle={CustomTabStyle}>
        <span>tab</span>
      </Tab>
    );
    expect(component).toHaveStyleRule('background-color', 'red');  
  })
})

