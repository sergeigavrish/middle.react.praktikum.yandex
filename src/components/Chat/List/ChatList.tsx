import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ChatCard } from '../Card/ChatCard';

import { IChatListProps } from './IChatListProps';
import { UrlQueryParams } from '../../../models/types/UrlQueryParams';

export const ChatList: FC<IChatListProps> = ({ chatList, selectedChat }: IChatListProps) => (
  <section>
    {chatList.map((item) => {
      const isSelected = selectedChat === item.guid;
      return (
        <Link className="link-reset" to={`/chat?${UrlQueryParams.chatId}=${item.guid}`} key={item.guid}>
          <ChatCard {...item} isSelected={isSelected} />
        </Link>
      );
    })}
  </section>
);
