import React from 'react';
import TabModal from '../src/TabModal';
import {shallow} from 'enzyme';
import noop from 'noop3';

test('render Panel', () => {
  const component = shallow(
    <TabModal closeModal={noop}
              handleTabSequence={noop}
              handleTabChange={noop}>
      <span>fake child</span>
    </TabModal>
  );
  expect(component).toMatchSnapshot();
})
