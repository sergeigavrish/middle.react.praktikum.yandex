import React, { FunctionComponent } from 'react';

import { ChatMessageWrapperProps } from './ChatMessageWrapperProps';

import resources from '../../../resources';

import './ChatMessageWrapper.css';

export const ChatMessageWrapper: FunctionComponent<ChatMessageWrapperProps> = ({
  className = resources.chat.messages.messageWrap,
  children,
}: ChatMessageWrapperProps) => (
  <div className={className}>
    {children}
  </div>
);
