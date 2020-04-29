import React, { FunctionComponent } from 'react';

import { ChatHistory } from '../../Chat/History/ChatHistory';

import { IMainContentProps } from './IMainContentProps';

import './MainContent.css';

export const MainContent: FunctionComponent<IMainContentProps> = ({
  onChatClosed,
  messageList,
  className,
}: IMainContentProps) => (
  <div className={`content ${className}`}>
    <button className="close-chat-button button-reset" onClick={onChatClosed} type="button">X</button>
    <ChatHistory messageList={messageList} />
  </div>
);
