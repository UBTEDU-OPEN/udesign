import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m3.55555573.00000004h14.22222227c1.9636791 0 3.5555555 1.59187644 3.5555555 3.55555555v17.77777781c0 1.9636791-1.5918764 3.5555555-3.5555555 3.5555555h-14.22222227c-1.96367911 0-3.55555555-1.5918764-3.55555555-3.5555555v-17.77777781c0-1.96367911 1.59187644-3.55555555 3.55555555-3.55555555zm1.77777764 3.55555552c-.98183955 0-1.77777778.79593822-1.77777778 1.77777777v14.22222227c0 .9818395.79593823 1.7777777 1.77777778 1.7777777h10.66666663c.9818396 0 1.7777778-.7959382 1.7777778-1.7777777v-14.22222227c0-.98183955-.7959382-1.77777777-1.7777778-1.77777777zm19.55555573 3.5555556c1.9636791 0 3.5555555 1.59187645 3.5555555 3.55555554v17.7777778c0 1.9636791-1.5918764 3.5555556-3.5555555 3.5555556h-14.2222223c-1.96367907 0-3.55555552-1.5918765-3.55555552-3.5555556l7.11049852-.0000001 7.1117237.0000001c1.963679-.0000001 3.5555554-1.5918764 3.5555555-3.5555555l.0000001-10.6666667-.0000001-7.11111114z'
      fill='currentColor'
      fillRule='evenodd'
      transform='translate(5.777778 4)'
    />
  </svg>
);

const CopyOutlined = convertIcon(SvgComponent);
export default CopyOutlined;

CopyOutlined.displayName = 'CopyOutlined';
