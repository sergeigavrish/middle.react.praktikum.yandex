import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';

import { IChatCardProps } from './IChatCardProps';

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
            <div className="card__info__top">
              <p className="card__info__top__name">{name}</p>
              <p className="card__info__top__date">{messageDate}</p>
            </div>
            <div className="card__info__bottom">
              <p className="card__info__bottom__author">
                {lastMessage.author.name}
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
