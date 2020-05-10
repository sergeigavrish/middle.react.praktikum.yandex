import React, { FC } from 'react';

import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';
import { WithPreload } from '../../../shared/WithPreload/WithPreload';

import { IWithPreloadInjectedProps } from '../../../shared/WithPreload/IWithPreloadInjectedProps';
import { MessageTypes } from '../../../models/enums/MessageTypes';
import { MessageList } from '../../../models/types/MessageList';

import { mockService } from '../../../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../../../helpers/utils';

import './ChatHistory.css';

export const ChatHistory: FC<IWithPreloadInjectedProps<MessageList>> = ({ data }: IWithPreloadInjectedProps<MessageList>) => (
  <div className="message-history">
    {(data || []).map((message) => {
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

const loadMessageHistoryById = (id: string) => {
  return mockService.getChatHistoryByChatId(id).then(addServiceMessageToChatHistory);
};

export const ChatHistoryWithPreload = WithPreload<MessageList>(loadMessageHistoryById)<IWithPreloadInjectedProps<MessageList>>(ChatHistory);
