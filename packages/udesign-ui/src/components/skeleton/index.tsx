import React from 'react';
import './skeleton.scss';
import { Skeleton as InternalSkeleton, SkeletonProps } from './skeleton';
import { attachPropertiesToComponent } from '../../utils';
import { Avatar } from './avatar';
import { Button } from './button';
import { Paragraph } from './paragraph';
import { Title } from './title';
import { Image } from './image';

interface CompoundedComponent extends React.FC<SkeletonProps> {
  Avatar: typeof Avatar;
  Button: typeof Button;
  Paragraph: typeof Paragraph;
  Title: typeof Title;
  Image: typeof Image;
}

const Skeleton = InternalSkeleton as CompoundedComponent;
attachPropertiesToComponent(Skeleton, {
  Avatar,
  Button,
  Title,
  Paragraph,
  Image,
});

export default Skeleton;
