import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';

import { IChatCardPropsWithHandlers } from './IChatCardProps';

import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../models/constants/resources';

import './ChatCard.css';

export const ChatCard: FunctionComponent<IChatCardPropsWithHandlers> = ({
  chat,
  author,
  lastMessage,
  selected,
  onChatSelected,
}: IChatCardPropsWithHandlers) => {
  const messageDate = dateHelper.getDate(lastMessage.timestamp);
  return (
    <button className="card-wrap button-reset" onClick={() => onChatSelected(chat.guid)} type="button">
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
