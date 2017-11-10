import deleteHelper from '../../src/helpers/delete';

it('case1', () => {
  expect(deleteHelper([0, 1, 2], 1)).toEqual([0, 2]);
})

