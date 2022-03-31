import './typography.scss';
import { attachPropertiesToComponent } from '../../utils';
import { Typography as InnerTypography } from './typography';

import { Title } from './title';
import { Text } from './text';
import { Ellipsis } from './ellipsis';
import { Editable } from './editable';
import { Paragraph } from './Paragraph';

export { Ellipsis, Text, Title, Paragraph, Editable };
export const Typography = attachPropertiesToComponent(InnerTypography, {
  Ellipsis,
  Text,
  Title,
  Paragraph,
  Editable,
});
