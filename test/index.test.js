import index from '../src';

test('Tabs need to be defined', () => {
  expect(index.Tabs).toBeDefined();
});

test('Tab need to be defined', () => {
  expect(index.Tab).toBeDefined();
});

test('DragTabList need to be defined', () => {
  expect(index.DragTabList).toBeDefined();
});

test('DragTab need to be defined', () => {
  expect(index.DragTab).toBeDefined();
});

test('Panel need to be defined', () => {
  expect(index.Panel).toBeDefined();
});

test('PanelList need to be defined', () => {
  expect(index.PanelList).toBeDefined();
});

test('ExtraButton need to be defined', () => {
  expect(index.ExtraButton).toBeDefined();
});

test('TabListStyle need to be defined', () => {
  expect(index.styled.TabListStyle).toBeDefined();
});

test('ActionButtonStyle need to be defined', () => {
  expect(index.styled.ActionButtonStyle).toBeDefined();
});

test('TabStyle need to be defined', () => {
  expect(index.styled.TabStyle).toBeDefined();
});

test('PanelStyle need to be defined', () => {
  expect(index.styled.PanelStyle).toBeDefined();
});
