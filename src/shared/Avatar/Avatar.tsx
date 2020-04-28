import React, { FunctionComponent } from 'react';

import { AvatarProps } from './AvatarProps';

import resources from '../../resources';

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
