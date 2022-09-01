import './spin.scss';
import { Spin } from './spin';
import { attachPropertiesToComponent } from '../../utils';
import showLoading, { hideLoading } from './show';

export type { SpinProps } from './spin';

export default attachPropertiesToComponent(Spin, { showLoading, hideLoading });
