import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';

import { IChatCardProps } from './IChatCardProps';
import { ChatCardMeta } from './Meta/ChatCardMeta';
import { ChatCardMessage } from './Message/ChatCardMessage';

import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../models/constants/resources';

import './ChatCard.css';

export const ChatCard: FunctionComponent<IChatCardProps> = ({
  guid,
  logo,
  name,
  lastMessage,
  isSelected,
  onChatSelected,
}: IChatCardProps) => {
  const messageDate = dateHelper.getDate(lastMessage.timestamp);
  return (
    <button className="card-wrap button-reset" onClick={() => onChatSelected(guid)} type="button">
      <section className={`card ${isSelected ? 'selected' : ''}`}>
        <section className="card__body">
          <Avatar className="card__logo" src={logo} alt={resources.chat.avatar.cardIcon} />
          <section className="card__info">
            <ChatCardMeta chatName={name} lastMessageDate={messageDate} />
            <ChatCardMessage author={lastMessage.author.name} message={lastMessage.content} />
          </section>
        </section>
      </section>
    </button>
  );
};
