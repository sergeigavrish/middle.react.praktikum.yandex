import React, { FunctionComponent } from 'react';

import { ChatCardMessageProps } from './ChatCardMessageProps';

import './ChatCardMessage.css';

export const ChatCardMessage: FunctionComponent<ChatCardMessageProps> = ({ author, message }: ChatCardMessageProps) => (
  <div className="card-message">
    <span className="card-message__author">
      {author}
      :
    </span>
    <span className="card-message__content">{message}</span>
  </div>
);
