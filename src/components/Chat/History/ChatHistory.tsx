import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';

import { ChatServiceMessage } from '../ServiceMessage/ChatServiceMessage';
import { ChatTextMessage } from '../TextMessage/ChatTextMessage';
import { WithPreload } from '../../../shared/WithPreload/WithPreload';
import { WithQuery } from '../../../shared/WithQueryFromUrl/WithQuery';

import { IWithPreloadInjectedProps } from '../../../shared/WithPreload/IWithPreloadInjectedProps';
import { MessageTypes } from '../../../models/enums/MessageTypes';
import { MessageList } from '../../../models/types/MessageList';
import { UrlQueryParams } from '../../../models/types/UrlQueryParams';

import { getChatHistoryByChatId } from '../../../services/chatService';

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

const withPreload = WithPreload<MessageList>(getChatHistoryByChatId)<IWithPreloadInjectedProps<MessageList>>(ChatHistory);
const withQueryAndPreload = WithQuery(UrlQueryParams.chatId)(withPreload);
export const ChatHistoryWithQueryAndPreload = withRouter(withQueryAndPreload);
