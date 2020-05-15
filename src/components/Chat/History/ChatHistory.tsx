import React, { FC } from 'react';

import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';

import { IChatHistoryProps } from './IChatHistoryProps';
import { MessageTypes } from '../../../models/enums/MessageTypes';

import './ChatHistory.css';

export const ChatHistory: FC<IChatHistoryProps> = ({ messageList = [] }: IChatHistoryProps) => (
  <div className="message-history">
    {messageList.map((message) => {
      switch (message.type) {
        case MessageTypes.Service:
          return <ChatServiceMessage key={message.guid} {...message} />;
        case MessageTypes.Text:
        default:
          return <ChatTextMessage key={message.guid} {...message} />;
      }
    })}
  </div>
);
