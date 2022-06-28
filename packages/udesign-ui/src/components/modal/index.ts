import './modal.scss';
import { Modal } from './modal';
import { attachPropertiesToComponent } from '../../utils';
import { info, success, error, warning, confirm } from './confirm';

export type { ModalProps } from './modal';

export default attachPropertiesToComponent(Modal, { info, success, error, warning, confirm });
