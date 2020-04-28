import React, { FunctionComponent } from 'react';
import ChatMessageWrapper from '../MessageWrapper/ChatMessageWrapper';

import './ChatServiceMessage.css';
import { IServiceMessage } from '../../../models/imessage';
import dateHelper from '../../../helpers/dateHelper';
import resources from '../../../resources';

const ChatServiceMessage: FunctionComponent<IServiceMessage> = ({ timestamp }: IServiceMessage) => (
  <ChatMessageWrapper className={resources.chat.serviceMessage}>
    <span className="service-message__date">{dateHelper.getServiceMessage(timestamp)}</span>
  </ChatMessageWrapper>
);

export default ChatServiceMessage;
