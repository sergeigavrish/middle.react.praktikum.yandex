import React, { FunctionComponent } from 'react';

import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';

import { ChatHistoryProps } from './ChatHistoryProps';
import { MessageTypes } from '../../../models/messageTypes';

import './ChatHistory.css';

export const ChatHistory: FunctionComponent<ChatHistoryProps> = ({ messageList }: ChatHistoryProps) => (
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
