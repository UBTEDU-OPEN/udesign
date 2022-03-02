import React from 'react';
import { Skeleton as InternalSkeleton, SkeletonProps } from './skeleton';
import { Avatar } from './avatar';
import { Button } from './button';
import { Input } from './input';
import { Paragraph } from './paragraph';
import { Title } from './title';

interface CompoundedComponent extends React.FC<SkeletonProps> {
  Avatar: typeof Avatar;
  Button: typeof Button;
  Input: typeof Input;
  Paragraph: typeof Paragraph;
  Title: typeof Title;
}

export const Skeleton = InternalSkeleton as CompoundedComponent;
Skeleton.Avatar = Avatar;
Skeleton.Button = Button;
Skeleton.Input = Input;
Skeleton.Title = Title;
Skeleton.Paragraph = Paragraph;
