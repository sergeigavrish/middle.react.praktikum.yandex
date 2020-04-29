import React, { FunctionComponent } from 'react';

import { IChatCardMetaProps } from './IChatCardMetaProps';

import './ChatCardMeta.css';

export const ChatCardMeta: FunctionComponent<IChatCardMetaProps> = ({ chatName, lastMessageDate }: IChatCardMetaProps) => (
  <div className="card-meta">
    <div className="card-meta__name">
      <span>{chatName}</span>
    </div>
    <div className="card-meta__date">
      <span>{lastMessageDate}</span>
    </div>
  </div>
);
