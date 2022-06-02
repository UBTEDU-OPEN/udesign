import React from 'react';

interface IProps {
  stroke: string;
}

export const CheckboxCenter: React.FC<IProps> = (props: IProps) => (
  <svg width='40px' height='40px' viewBox='0 0 40 40' version='1.1' xmlns='http://www.w3.org/2000/svg' style={{ cursor: 'pointer' }}>
    <title>icon_checkbox_centre</title>
    <desc>Created with Sketch.</desc>
    <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='多选框' transform='translate(-592.000000, -1422.000000)' stroke={props.stroke || '#7284FB'} strokeWidth='2'>
        <g id='分组-3' transform='translate(592.000000, 1422.000000)'>
          <g id='分组-35'>
            <circle id='椭圆形' cx='20' cy='20' r='11'></circle>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
