import {DragTabList, DragTab, TabList, Tab} from '../../src';
import {isTabList, isTab} from '../../src/utils/isType';

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