import React, { FunctionComponent } from 'react';

import './ChatCard.css';

import Avatar from '../../../shared/Avatar/Avatar';
import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../resources';
import { IChatCardProps } from './IChatCardProps';

const ChatCard: FunctionComponent<IChatCardProps> = ({
  chat,
  author,
  lastMessage,
  selected,
  onChatSelected,
}: IChatCardProps) => {
  const messageDate = dateHelper.getDate(lastMessage.timestamp);
  return (
    <button className="card-wrap button-reset" data-guid={chat.guid} onClick={onChatSelected} type="button">
      <section className={`card ${selected ? 'selected' : ''}`}>
        <section className="card__body">
          <Avatar className="card__logo" src={chat.logo} alt={resources.chat.avatar.cardIcon} />
          <section className="card__info">
            <div className="card__info__top">
              <p className="card__info__top__name">{chat.name}</p>
              <p className="card__info__top__date">{messageDate}</p>
            </div>
            <div className="card__info__bottom">
              <p className="card__info__bottom__author">
                {author.name}
                :
              </p>
              <p className="card__info__bottom__message">{lastMessage.content}</p>
            </div>
          </section>
        </section>
      </section>
    </button>
  );
};

export default ChatCard;
