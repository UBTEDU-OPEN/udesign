import './typography.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Typography } from './typography';
import { Title } from './title';
import { Text } from './text';
import { Ellipsis } from './ellipsis';
import { Editable } from './editable';
import { Paragraph } from './paragraph';

export type TypographyProps = typeof Typography & {
  Text: typeof Text;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
  Ellipsis: typeof Ellipsis;
  Editable: typeof Editable;
};

export default attachPropertiesToComponent(Typography, {
  Text,
  Title,
  Paragraph,
  Ellipsis,
  Editable,
});
