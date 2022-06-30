import React from 'react';
import { convertIcon } from '../icon';

const SvgComponent = () => (
  <svg width='1em' height='1em' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m6.1088 9.18348225c.4416 0 .81777778.15570216 1.12853333.46710648.31075556.31140431.46613334.68836747.46613334 1.13088937 0 .4261322-.15537778.7989979-.46613334 1.1185971-.31075555.3195991-.68693333.4793987-1.12853333.4793987s-.81777778-.1597996-1.12853333-.4793987c-.31075556-.3195992-.46613334-.6924649-.46613334-1.1185971 0-.4425219.15537778-.81948506.46613334-1.13088937.31075555-.31140432.68693333-.46710648 1.12853333-.46710648zm12.3648-9.17003757c.7196444 0 1.3575111.12702018 1.9136.38106054s1.0263111.58183438 1.4106667.98338205c.3843555.40154766.6787555.85636186.8832 1.36444258.2044444.50808073.3066666 1.0079666.3066666 1.49965762v12.56270563c0 .3769631-.0858666.7457314-.2576 1.1063048-.1717333.3605734-.4007111.6883674-.6869333.9833821-.2862222.2950146-.6133333.5326652-.9813333.7129519s-.7482667.2704301-1.1408.2704301v-13.74276409c0-.42613222-.0817778-.82358246-.2453334-1.19235073-.1635555-.36876827-.3843555-.69246486-.6624-.97108977-.2780444-.27862491-.6010666-.49988587-.9690666-.66378288s-.7646223-.24584551-1.1898667-.24584551h-13.78773333c0-.36057342.08177777-.72114683.24533333-1.08172025s.38435556-.68836743.6624-.98338205c.27804444-.29501461.60515556-.53266527.98133333-.71295198.37617778-.18028671.77688889-.27043006 1.20213334-.27043006zm-2.1344 4.59731106c.736 0 1.2593778.20077384 1.5701333.6023215.3107556.40154767.4661334.93831037.4661334 1.6102881v14.48030066c0 .4097425-.1717334.7949005-.5152 1.1554739-.3434667.3605734-.7768889.5408601-1.3002667.5408601h-14.8672c-.4416 0-.83413333-.1802867-1.1776-.5408601s-.5152-.7949005-.5152-1.3029812v-14.75073073c0-.52447042.14311111-.95470006.42933333-1.29068893.28622223-.33598887.66648889-.5039833 1.1408-.5039833zm-1.0058667 3.73685178c0-.18028671-.0572444-.32779402-.1717333-.44252193-.1144889-.1147279-.2616889-.17209185-.4416-.17209185h-11.06453333c-.17991111 0-.32711111.05736395-.4416.17209185-.11448889.11472791-.17173334.26223522-.17173334.44252193v5.48235488c.1472.1802867.28213334.3810606.4048.6023215.12266667.221261.27395556.4302297.45386667.6269061s.41706667.3646708.71146667.5039833c.2944.1393124.70328889.2089687 1.22666666.2089687.76871111 0 1.39431111-.1229228 1.8768-.3687683s.90773334-.5572498 1.27573334-.9342129c.368-.3769632.71146666-.7826083 1.03040003-1.2169353.3189333-.4343271.6992-.8440696 1.1408-1.2292276s.9895111-.712952 1.6437333-.983382c.6542222-.2704301 1.4965333-.4220348 2.5269333-.4548142z'
      fill='currentColor'
      transform='translate(3 3)'
    />
  </svg>
);

const PictureFilled = convertIcon(SvgComponent);
export default PictureFilled;

PictureFilled.displayName = 'PictureFilled';
