import React from 'react';

import './ChatCard.css';

import Avatar from '../../../shared/Avatar/Avatar';
import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../resources';
import { IChatCardProps } from './IChatCardProps';

const ChatCard: React.FunctionComponent<IChatCardProps> = ({
  chat,
  author,
  lastMessage,
  selected,
  onChatSelected,
}: IChatCardProps) => {
  const messageDate = dateHelper.getDate(lastMessage.timestamp);
  return (
    <section className={`card ${selected ? 'selected' : ''}`}>
      <button className="card__wrapper button-reset" data-guid={chat.guid} onClick={onChatSelected} type="button">
        <section className="card__wrapper__body">
          <Avatar className="card__wrapper__body__logo" src={chat.logo} alt={resources.chat.cardLogo} />
          <section className="card__wrapper__body__content">
            <div className="card__wrapper__body__content_top">
              <p className="card__wrapper__body__content_top__name">{chat.name}</p>
              <p className="card__wrapper__body__content_top__message-date">{messageDate}</p>
            </div>
            <div className="card__wrapper__body__content_bottom">
              <p className="card__wrapper__body__content_bottom__author">
                {author.name}
                :
              </p>
              <p className="card__wrapper__body__content_bottom__message">{lastMessage.content}</p>
            </div>
          </section>
        </section>
      </button>
    </section>
  );
};

export default ChatCard;
