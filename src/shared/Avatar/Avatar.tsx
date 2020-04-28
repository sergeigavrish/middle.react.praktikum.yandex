import React, { FunctionComponent } from 'react';

import resources from '../../resources';
import { AvatarProps } from './AvatarProps';

import './Avatar.css';

export const Avatar: FunctionComponent<AvatarProps> = ({
  className,
  src,
  alt = resources.chat.avatar.default,
}: AvatarProps) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);
