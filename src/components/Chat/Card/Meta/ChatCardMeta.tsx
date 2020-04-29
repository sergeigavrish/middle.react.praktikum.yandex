import React, { FunctionComponent } from 'react';

import { ChatCardMetaProps } from './IChatCardMetaProps';

import './ChatCardMeta.css';

export const ChatCardMeta: FunctionComponent<ChatCardMetaProps> = ({ chatName, lastMessageDate }: ChatCardMetaProps) => (
  <div className="card-meta">
    <div className="card-meta__name">
      <span>{chatName}</span>
    </div>
    <div className="card-meta__date">
      <span>{lastMessageDate}</span>
    </div>
  </div>
);
