import React, { FunctionComponent } from 'react';

import { IMainSidebarProps } from './IMainSidebarProps';

import { ChatList } from '../../Chat/List/ChatList';

import './MainSidebar.css';

export const MainSidebar: FunctionComponent<IMainSidebarProps> = ({
  onChatSelected,
  selectedChat,
  className,
  chatList,
}: IMainSidebarProps) => (
  <aside className={`sidebar ${className}`}>
    <ChatList onChatSelected={onChatSelected} selectedChat={selectedChat} chatList={chatList} />
  </aside>
);
