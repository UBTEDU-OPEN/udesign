import './skeleton.scss';
import { Avatar } from './avatar';
import { Button } from './button';
import { Paragraph } from './paragraph';
import { Title } from './title';
import { Image } from './image';
import { attachPropertiesToComponent } from '../../utils';
import { Skeleton } from './skeleton';

export default attachPropertiesToComponent(Skeleton, {
  Avatar,
  Button,
  Title,
  Paragraph,
  Image,
});
