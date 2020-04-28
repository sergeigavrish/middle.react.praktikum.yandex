import React, { FunctionComponent } from 'react';

import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { IServiceMessage } from '../../../models/interfaces/imessage';

import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../models/constants/resources';

import './ChatServiceMessage.css';

export const ChatServiceMessage: FunctionComponent<IServiceMessage> = ({ timestamp }: IServiceMessage) => (
  <ChatMessageWrapper className={resources.chat.messages.serviceMessage}>
    <span className="service-message__date">{dateHelper.getServiceMessage(timestamp)}</span>
  </ChatMessageWrapper>
);
