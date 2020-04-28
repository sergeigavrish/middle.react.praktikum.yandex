import React, { FunctionComponent } from 'react';

import resources from '../../../resources';
import { ChatMessageWrapperProps } from './ChatMessageWrapperProps';

import './ChatMessageWrapper.css';

export const ChatMessageWrapper: FunctionComponent<ChatMessageWrapperProps> = ({
  className = resources.chat.messages.messageWrap,
  children,
}: ChatMessageWrapperProps) => (
  <div className={className}>
    {children}
  </div>
);
