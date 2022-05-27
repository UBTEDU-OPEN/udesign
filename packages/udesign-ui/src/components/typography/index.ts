import './typography.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Typography } from './typography';
import { Title } from './title';
import { Text } from './text';
import { Ellipsis } from './ellipsis';
import { Editable } from './editable';
import { Paragraph } from './paragraph';

export type { TitleProps } from './title';
export type { TextProps } from './text';
export type { EllipsisProps } from './ellipsis';
export type { EditableProps } from './editable';
export type { ParagraphProps } from './paragraph';

export default attachPropertiesToComponent(Typography, {
  Ellipsis,
  Text,
  Title,
  Paragraph,
  Editable,
});
