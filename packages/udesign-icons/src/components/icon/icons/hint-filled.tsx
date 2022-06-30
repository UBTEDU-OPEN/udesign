import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m12.9782567 3.60468988c-.0583514-.2289019-.0893678-.46872932-.0893678-.71580099 0-1.59548928 1.2933996-2.88888889 2.8888889-2.88888889s2.8888889 1.29339961 2.8888889 2.88888889c0 .20234787-.0208038.39983676-.0603892.59044447 5.1403688.85069118 9.0603892 5.31662404 9.0603892 10.69812674v7.7003464c0 2.031103.7133667 3.9976881 2.0155604 5.5564284l1.5955507 1.9098918c.9326177 1.1163538.7836703 2.7773734-.3326835 3.7099911-.4737166.3957496-1.0713814.6125489-1.6886538.6125489h-8.8345096c-.2225495 2.1844445-2.0676375 3.8888889-4.3108198 3.8888889s-4.0882703-1.7044444-4.3108198-3.8888889h-8.83450957c-1.45465514 0-2.63388612-1.179231-2.63388612-2.6338862 0-.6172724.21679923-1.2149371.61254883-1.6886538l1.59555071-1.9098918c1.30219368-1.5587403 2.01556041-3.5253254 2.01556041-5.5564284v-7.7003464c0-5.15667006 3.59931523-9.47267497 8.42270114-10.57277022z'
      fill='currentColor'
      fillRule='evenodd'
      transform='translate(3.777778 .666667)'
    />
  </svg>
);

const HintFilled = convertIcon(SvgComponent);
export default HintFilled;

HintFilled.displayName = 'HintFilled';
