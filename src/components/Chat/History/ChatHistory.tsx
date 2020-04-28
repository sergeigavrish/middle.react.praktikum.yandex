import React, { FunctionComponent } from 'react';

import { MessageList } from '../../../models/imessage';
import ChatTextMessage from '../TextMessage/ChatTextMessage';
import { MessageTypes } from '../../../models/messageTypes';
import ChatServiceMessage from '../ServiceMessage/ChatServiceMessage';

import './ChatHistory.css';

interface Props {
  messageList: MessageList;
}

const ChatHistory: FunctionComponent<Props> = ({ messageList }: Props) => (
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

export default ChatHistory;
