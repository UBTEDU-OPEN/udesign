import React from 'react';
import { Avatar as InternalAvatar, AvatarProps } from './avatar';
import { Group } from './group';

interface CompoundedComponent extends React.FC<AvatarProps> {
  Group: typeof Group;
}

export const Avatar = InternalAvatar as CompoundedComponent;
Avatar.Group = Group;
