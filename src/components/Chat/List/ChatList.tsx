import React, { FunctionComponent } from 'react';

import { ChatCard } from '../Card/ChatCard';

import { IChatListProps } from './IChatListProps';

export const ChatList: FunctionComponent<IChatListProps> = ({ chatList, selectedChat, onChatSelected }: IChatListProps) => (
  <section>
    {chatList.map((item) => {
      const isSelected = selectedChat === item.guid;
      return (
        <ChatCard {...item} isSelected={isSelected} onChatSelected={onChatSelected} key={item.guid} />
      );
    })}
  </section>
);
