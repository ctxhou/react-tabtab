import warning from 'warning';

export function activeIndexAndTabChange(activeIndex, onTabChange) {
  if (activeIndex && !onTabChange) {
    warning('When you use `activeIndex` to control active tab,' +
            'you should pass `onTabChange` method to know user\'s actions.');
  }
}