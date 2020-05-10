import React, { FC } from 'react';

import { ChatHistoryWithQueryAndPreload } from '../../../Chat/History/ChatHistory';

import { IMainContentLayoutProps } from './IMainContentLayoutProps';

export const MainContentLayout: FC<IMainContentLayoutProps> = ({ onChatClosed }: IMainContentLayoutProps) => (
  <>
    <button className="close-chat-button button-reset" onClick={onChatClosed} type="button">X</button>
    <ChatHistoryWithQueryAndPreload />
  </>
);
