import React, { FC } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';

import { IChatCardProps } from './IChatCardProps';
import { ChatCardMeta } from './Meta/ChatCardMeta';
import { ChatCardMessage } from './Message/ChatCardMessage';

import { getDate } from '../../../helpers/dateHelper';
import { resources } from '../../../constants/resources';

import './ChatCard.css';

export const ChatCard: FC<IChatCardProps> = ({
  logo,
  name,
  lastMessage,
  isSelected,
}: IChatCardProps) => {
  const messageDate = getDate(lastMessage.timestamp);
  return (
    <div className={`card-wrap ${isSelected ? 'selected' : ''}`}>
      <section className="card">
        <section className="card__body">
          <Avatar className="card__logo" src={logo} alt={resources.avatar.cardIcon} />
          <section className="card__info center">
            <ChatCardMeta chatName={name} lastMessageDate={messageDate} />
            <ChatCardMessage author={lastMessage.author.name} message={lastMessage.content} />
          </section>
        </section>
      </section>
    </div>
  );
};
