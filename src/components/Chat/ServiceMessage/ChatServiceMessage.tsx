import React, { FunctionComponent } from 'react';

import { IServiceMessage } from '../../../models/imessage';
import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';
import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../resources';

import './ChatServiceMessage.css';

export const ChatServiceMessage: FunctionComponent<IServiceMessage> = ({ timestamp }: IServiceMessage) => (
  <ChatMessageWrapper className={resources.chat.messages.serviceMessage}>
    <span className="service-message__date">{dateHelper.getServiceMessage(timestamp)}</span>
  </ChatMessageWrapper>
);
