import React from 'react';

import { IChatListProps } from './IChatListProps';
import ChatCard from '../Card/ChatCard';

const ChatList: React.FunctionComponent<IChatListProps> = ({ chats }: IChatListProps) => (
  <section>
    {chats.map((chat) => <ChatCard {...chat} key={chat.chat.guid} />)}
  </section>
);

export default ChatList;
