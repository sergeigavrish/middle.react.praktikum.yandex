import React, { FunctionComponent } from 'react';

import { Avatar } from '../../../shared/Avatar/Avatar';
import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { ITextMessage } from '../../../models/interfaces/IMessage';

import resources from '../../../models/constants/resources';
import dateHelper from '../../../helpers/dateHelper';

import './ChatTextMessage.css';

export const ChatTextMessage: FunctionComponent<ITextMessage> = ({
  author,
  content,
  timestamp,
}: ITextMessage) => (
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
        <span>{dateHelper.getTime(timestamp)}</span>
      </div>
    </section>
  </ChatMessageWrapper>
);
