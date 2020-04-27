import React, { FunctionComponent } from 'react';
import ChatMessageWrapper from '../MessageWrapper/ChatMessageWrapper';

import './ChatTextMessage.css';
import Avatar from '../../../shared/Avatar/Avatar';
import resources from '../../../resources';
import { IMessageWithAuthor } from '../../../models/imessage';
import dateHelper from '../../../helpers/dateHelper';

const ChatTextMessage: FunctionComponent<IMessageWithAuthor> = ({
  author,
  content,
  timestamp,
}: IMessageWithAuthor) => (
  <ChatMessageWrapper>
    <section style={{ position: 'relative' }} className="message">
      <Avatar className="message__icon" src={author.avatar} alt={resources.chat.messageAuthor} />
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


export default ChatTextMessage;
