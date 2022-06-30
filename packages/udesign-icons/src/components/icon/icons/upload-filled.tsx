import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m20.8299558 2.65943262c-.2163549-.24994925-.529275-.39337359-.858254-.39337359-.3289789 0-.6418991.14342434-.858254.39337359l-13.38926656 14.84624428c-.47134654.5211439-.27222155.9507698.44362025.9507698h6.02416171c.7183624 0 1.3031346.5669028 1.3031346 1.2634561v9.7390345c0 .6940111.5872928 1.2634561 1.3031346 1.2634561h10.3393771c.7047413.0113683 1.2866079-.5527814 1.3031346-1.2634561v-9.7390345c0-.6965533.5872928-1.2634561 1.3031346-1.2634561h6.0241617c.7158418 0 .9174874-.4296259.4436203-.9533119l-13.3817049-14.84624435zm-15.9627683 32.20923208c0-.6965532.58729276-1.2659982 1.30313456-1.2659982h27.60023894c.7158418 0 1.3031345.569445 1.3031345 1.2634561v1.6574916c-.0151631.7116749-.5974321 1.2773506-1.3031345 1.2659983h-27.60023894c-.70570244.0113523-1.28797145-.5543234-1.30313456-1.2659983v-1.6574916z'
      fill='currentColor'
    />
  </svg>
);

const UploadFilled = convertIcon(SvgComponent);
export default UploadFilled;

UploadFilled.displayName = 'UploadFilled';