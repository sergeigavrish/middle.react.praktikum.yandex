import React, { FunctionComponent } from 'react';

import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { IServiceMessage } from '../../../interfaces/IMessage';

import { getServiceMessage } from '../../../helpers/dateHelper';
import { resources } from '../../../constants/resources';

import './ChatServiceMessage.css';

export const ChatServiceMessage: FunctionComponent<IServiceMessage> = ({ timestamp }: IServiceMessage) => (
  <ChatMessageWrapper className={resources.messages.serviceMessage}>
    <span className="service-message__date">{getServiceMessage(timestamp)}</span>
  </ChatMessageWrapper>
);
