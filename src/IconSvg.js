import React from 'react';
// The svg path is from react-icons: https://github.com/gorangajic/react-icons/
const Svg = ({children}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" height="1em" width="1em" style={{verticalAlign: 'middle'}}>
    {children}
  </svg>
);

const CloseIcon = () => (
  <Svg>
    <g><path d="m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z"/></g>
  </Svg>    
);

const LeftIcon = () => (
  <Svg>
    <g><path d="m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z"/></g>
  </Svg>
);

const RightIcon = () => (
  <Svg>
    <g><path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"/></g>
  </Svg>
);

const BulletIcon = () => (
  <Svg>
    <g><path d="m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z"/></g>
  </Svg>
);

export {
  CloseIcon,
  LeftIcon,
  RightIcon,
  BulletIcon
};