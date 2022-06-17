import React from 'react';

interface IProps {
  onClick?: () => void;
}

export const IconDelete = (props: IProps) => (
  <svg
    height='40'
    viewBox='0 0 40 40'
    width='40'
    xmlns='http://www.w3.org/2000/svg'
    onClick={() => {
      if (props.onClick) {
        props.onClick();
      }
    }}
  >
    <g fill='none' fillRule='evenodd'>
      <circle cx='20' cy='20' fill='#d6dcec' r='9' />
      <path
        d='m21 19h3c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-3v3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3h-3c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1h3v-3c0-.5522847.4477153-1 1-1s1 .4477153 1 1z'
        fill='#7d86a3'
        transform='matrix(.70710678 -.70710678 .70710678 .70710678 -8.284271 20)'
      />
    </g>
  </svg>
);
