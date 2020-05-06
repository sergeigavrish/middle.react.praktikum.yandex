import React, { FunctionComponent } from 'react';

import { IChatMessageWrapperProps } from './IChatMessageWrapperProps';

import { resources } from '../../../models/constants/resources';

import './ChatMessageWrapper.css';

export const ChatMessageWrapper: FunctionComponent<IChatMessageWrapperProps> = ({
  className = resources.messages.messageWrap,
  children,
}: IChatMessageWrapperProps) => (
  <div>
    <div className={className}>
      {children}
    </div>
  </div>
);
