import React from 'react';
import './skeleton.scss';
import { Skeleton } from './skeleton';
import { attachPropertiesToComponent } from '../../utils';
import { Avatar } from './avatar';
import { Button } from './button';
import { Paragraph } from './paragraph';
import { Title } from './title';
import { Image } from './image';

attachPropertiesToComponent(Skeleton, {
  Avatar,
  Button,
  Title,
  Paragraph,
  Image,
});

export default Skeleton;
