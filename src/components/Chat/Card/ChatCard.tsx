import React from 'react';

import './ChatCard.css';

import Avatar from '../../../shared/Avatar/Avatar';
import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../resources';
import { IChatCardProps } from './IChatCardProps';

const ChatCard: React.FunctionComponent<IChatCardProps> = ({
  name,
  logo,
  author,
  lastMessage,
}: IChatCardProps) => {
  const messageDate = dateHelper.getDate(lastMessage.timestamp);
  return (
    <section className="chat-info">
      <Avatar className="chat-info__logo" src={logo} alt={resources.chat.cardLogo} />
      <div className="chat-info__content">
        <div className="chat-info__content_top">
          <p className="chat-info__content_top__name">{name}</p>
          <p className="chat-info__content_top__message-date">{messageDate}</p>
        </div>
        <div className="chat-info__content_bottom">
          <p className="chat-info__content_bottom__author">
            {author.name}
            :
          </p>
          <p className="chat-info__content_bottom__message">{lastMessage.content}</p>
        </div>
      </div>
    </section>
  );
};

export default ChatCard;
