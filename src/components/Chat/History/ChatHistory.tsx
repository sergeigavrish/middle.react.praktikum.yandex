import React, { FunctionComponent } from 'react';

import { MessageTypes } from '../../../models/messageTypes';
import { ChatHistoryProps } from './ChatHistoryProps';
import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';

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
