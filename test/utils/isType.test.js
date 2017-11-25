import {DragTabList, DragTab, TabList, Tab} from '../../src';
import {isTabList, isTab, isNumber} from '../../src/utils/isType';

describe('isTabList', () => {
  it('DragTabList', () => {
    expect(isTabList({type: DragTabList})).toEqual(true);
  });
  it('TabList', () => {
    expect(isTabList({type: TabList})).toEqual(true);
  });
})

describe('isTab', () => {
  it('DragTab', () => {
    expect(isTab({type: DragTab})).toEqual(true);
  });
  it('Tab', () => {
    expect(isTab({type: Tab})).toEqual(true);
  });
})

it('isNumber', () => {
  expect(isNumber(1)).toEqual(true);
  expect(isNumber('2')).toEqual(true);
  expect(isNumber('sdfsdf')).toEqual(false);
})