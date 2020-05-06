import React, { FunctionComponent } from 'react';

import { ChatMessageWrapper } from '../MessageWrapper/ChatMessageWrapper';

import { IServiceMessage } from '../../../models/interfaces/IMessage';

import { getServiceMessage } from '../../../helpers/dateHelper';
import { resources } from '../../../models/constants/resources';

import './ChatServiceMessage.css';

export const ChatServiceMessage: FunctionComponent<IServiceMessage> = ({ timestamp }: IServiceMessage) => (
  <ChatMessageWrapper className={resources.messages.serviceMessage}>
    <span className="service-message__date">{getServiceMessage(timestamp)}</span>
  </ChatMessageWrapper>
);
