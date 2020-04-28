import React, { FunctionComponent } from 'react';

import { IChatListProps } from './IChatListProps';
import { ChatCard } from '../Card/ChatCard';

export const ChatList: FunctionComponent<IChatListProps> = ({ chatList, onChatSelected }: IChatListProps) => (
  <section>
    {chatList.map((chatListItem) => (
      <ChatCard {...chatListItem} onChatSelected={onChatSelected} key={chatListItem.chat.guid} />
    ))}
  </section>
);
