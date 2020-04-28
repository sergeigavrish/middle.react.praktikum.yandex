import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';
import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { IMessageWithAuthor } from '../../../models/interfaces/imessage';

import resources from '../../../models/constants/resources';
import dateHelper from '../../../helpers/dateHelper';

import './ChatTextMessage.css';

export const ChatTextMessage: FunctionComponent<IMessageWithAuthor> = ({
  author,
  content,
  timestamp,
}: IMessageWithAuthor) => (
  <ChatMessageWrapper>
    <section style={{ position: 'relative' }} className="message">
      <Avatar className="message__icon" src={author.avatar} alt={resources.chat.avatar.messageAuthor} />
      <div className="message__body">
        <span className="message__author">{author.name}</span>
        <div className="message__content">
          <span>{content}</span>
        </div>
      </div>
      <div className="message__time">
        <span className="message__created">{dateHelper.getTime(timestamp)}</span>
      </div>
    </section>
  </ChatMessageWrapper>
);
