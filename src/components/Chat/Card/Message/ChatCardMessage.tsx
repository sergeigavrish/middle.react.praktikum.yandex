import React, { FunctionComponent } from 'react';

import { IChatCardMessageProps } from './IChatCardMessageProps';

import './ChatCardMessage.css';

export const ChatCardMessage: FunctionComponent<IChatCardMessageProps> = ({ author, message }: IChatCardMessageProps) => (
  <div className="card-message">
    <span className="card-message__author">
      {author}
      :
    </span>
    <span className="card-message__content">{message}</span>
  </div>
);
