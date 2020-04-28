import React, { FunctionComponent } from 'react';

import { ChatCard } from '../Card/ChatCard';

import { IChatListProps } from './IChatListProps';

export const ChatList: FunctionComponent<IChatListProps> = ({ chatList, onChatSelected }: IChatListProps) => (
  <section>
    {chatList.map((chatListItem) => (
      <ChatCard {...chatListItem} onChatSelected={onChatSelected} key={chatListItem.chat.guid} />
    ))}
  </section>
);
