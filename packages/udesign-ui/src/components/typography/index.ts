import './typography.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Typography } from './typography';
import { Title } from './title';
import { Text } from './text';
import { Ellipsis } from './ellipsis';
import { Editable } from './editable';
import { Paragraph } from './paragraph';

export type { TitleProps } from './title';

export default attachPropertiesToComponent(Typography, {
  Ellipsis,
  Text,
  Title,
  Paragraph,
  Editable,
});
