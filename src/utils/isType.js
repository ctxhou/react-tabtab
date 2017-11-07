export function isTabList(element) {
  return element.type && 
         (element.type === 'TabList' || element.type.displayName === 'DragTabList');  
}

export function isTab(element) {
  return element.type && 
         (element.type === 'Tab' || element.type.displayName === 'DragTab');
}
