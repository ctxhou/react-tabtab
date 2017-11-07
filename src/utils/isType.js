export function isTabList(element) {
  return element.type && 
         (element.type.displayName === 'TabList' || element.type.displayName === 'DragTabList');  
}

export function isTab(element) {
  return element.type && 
         (element.type.displayName === 'Tab' || element.type.displayName === 'DragTab');
}
