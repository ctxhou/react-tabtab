import SortMethod from '../src/SortMethod';

describe('SortMethod test', () => {
  it('should call handleTabChange & handleTabSequence', () => {
    const handleTabChange = jest.fn();
    const handleTabSequence = jest.fn();
    const sortMethodFn = new SortMethod({handleTabChange, handleTabSequence});
    sortMethodFn.onSortEnd({oldIndex: 1, newIndex: 1});
    sortMethodFn.onSortEnd({oldIndex: 1, newIndex: 3});
    expect(handleTabChange).toBeCalled();
    expect(handleTabChange.mock.calls[0][0]).toEqual(1);
    expect(handleTabSequence).toBeCalled();    
    expect(handleTabSequence.mock.calls[0][0]).toEqual({"newIndex": 3, "oldIndex": 1});
  })
})