// @flow
export function isTabList(element: any) {
  return element.type && 
         (element.type.displayName === 'TabList' || element.type.displayName === 'DragTabList');  
}

export function isTab(element: any) {
  return element.type && 
         (element.type.displayName === 'Tab' || element.type.displayName === 'DragTab');
}

export function isNumber(number: any) {
  return !isNaN(parseInt(number, 10));
}