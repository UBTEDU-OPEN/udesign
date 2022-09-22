import React from 'react';

export const DefaultImage = () => (
  <svg height={198} width={200} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <linearGradient id='b' x1='50%' x2='50%' y1='100%' y2='0%'>
      <stop offset={0} stopColor='#f7f9ff' stopOpacity={0} />
      <stop offset={1} stopColor='#edf1ff' />
    </linearGradient>
    <linearGradient id='c' x1='50%' x2='50%' y1='100%' y2='0%'>
      <stop offset={0} stopColor='#f7f9ff' />
      <stop offset={1} stopColor='#edf1ff' />
    </linearGradient>
    <linearGradient id='d' x1='50%' x2='50%' y1='0%' y2='100%'>
      <stop offset={0} stopColor='#d7d7dd' />
      <stop offset={1} stopColor='#eff3fa' />
    </linearGradient>
    <linearGradient id='a'>
      <stop offset={0} stopColor='#f4f4f6' />
      <stop offset={1} stopColor='#d4d4da' />
    </linearGradient>
    <linearGradient id='e' x1='50%' x2='76.15%' xlinkHref='#a' y1='41.22%' y2='140.94%' />
    <linearGradient id='f' x1='-127.256%' x2='49.611%' xlinkHref='#a' y1='-16.421%' y2='91.402%' />
    <g fill='none' fillRule='evenodd'>
      <ellipse cx={68.065} cy={68.261} fill='url(#b)' rx={68.065} ry={68.261} transform='translate(31.702 36)' />
      <g fill='url(#c)'>
        <ellipse cx={113.287} cy={7.481} rx={7.459} ry={7.481} />
        <ellipse cx={196.503} cy={66.158} rx={3.497} ry={3.507} />
        <ellipse cx={168.531} cy={141.432} rx={3.497} ry={3.507} />
        <ellipse cx={17.016} cy={78.314} rx={3.497} ry={3.507} />
        <ellipse cx={6.76} cy={123.198} rx={6.76} ry={6.779} />
      </g>
      <path
        d='M27.268 26.01C12.164 25.205.486 19.711.486 13.057.486 5.803 14.208 0 31.141 0s30.655 5.803 30.655 13.058c0 6.674-11.765 12.187-26.947 12.96l-2.063 3.87a1.948 1.948 0 0 1-1.723 1.033 1.948 1.948 0 0 1-1.722-1.033zm1.515 11.568c0 1.305 1.056 2.362 2.358 2.362s2.358-1.057 2.358-2.362-1.056-2.362-2.358-2.362-2.358 1.058-2.358 2.362z'
        fill='url(#d)'
        transform='translate(68.805 44.973)'
      />
      <path
        d='M89.673 60.434a1.946 1.946 0 0 1-1.798-1.193 1.923 1.923 0 0 1 .421-2.106 1.956 1.956 0 0 1 2.121-.419 1.933 1.933 0 0 1 1.201 1.786 1.94 1.94 0 0 1-1.945 1.932zm10.702 0a1.946 1.946 0 0 1-1.798-1.193 1.923 1.923 0 0 1 .422-2.106 1.956 1.956 0 0 1 2.12-.419 1.933 1.933 0 0 1 1.202 1.786 1.94 1.94 0 0 1-1.946 1.932zm10.702 0a1.946 1.946 0 0 1-1.798-1.193 1.923 1.923 0 0 1 .422-2.106 1.956 1.956 0 0 1 2.12-.419 1.933 1.933 0 0 1 1.201 1.786 1.94 1.94 0 0 1-1.945 1.932z'
        fill='#9c9cac'
        fillRule='nonzero'
        opacity={0.905}
      />
      <path d='M12.391 6.505v49.408a3.502 3.502 0 0 0 2.72 3.424l41.949 9.548-.5-57.334C26.78 7.19 12.39 5.983 12.39 6.505z' fill='url(#e)' transform='translate(43.149 87.61)' />
      <path d='M101.215 6.505v49.41a3.501 3.501 0 0 1-2.709 3.413l-41.483 9.557-.477-56.62c29.78-4.362 44.669-6.282 44.669-5.76z' fill='url(#f)' transform='translate(43.149 87.61)' />
      <path d='M43.73 112.55 55.588 93l44.108 6.081-10.367 23.344z' fill='#e9e9ec' opacity={0.905} />
      <path d='m99.695 99.073 10.869 23.352 45.095-10.73L144.744 93z' fill='#d7d7dd' opacity={0.905} />
      <path d='M94.047 99.195V88.354l-37.48 4.398z' fill='#d4d4da' opacity={0.905} />
      <path d='m98.387 99.195 46.49-6.857-52.37-4.5v10.888z' fill='#eaeaed' opacity={0.905} />
    </g>
  </svg>
);
