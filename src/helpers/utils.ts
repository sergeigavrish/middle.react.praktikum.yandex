import { v4 as uuid } from 'uuid';

import { ITextMessage } from '../models/interfaces/IMessage';
import { MessageList } from '../models/types/MessageList';
import { MessageTypes } from '../models/enums/MessageTypes';

import dateHelper from './dateHelper';

const addServiceMessageToChatHistory = (messageList: ITextMessage[]): MessageList => {
  const dateSet: Set<number> = new Set();
  return messageList.reduce((acc: MessageList, m) => {
    const timestamp = dateHelper.removeTimeFromTimestamp(m.timestamp);
    if (!dateSet.has(timestamp)) {
      dateSet.add(timestamp);
      acc.push({
        guid: uuid(),
        timestamp,
        type: MessageTypes.Service,
      });
    }
    acc.push(m);
    return acc;
  }, []);
};

const utils = {
  addServiceMessageToChatHistory,
};

export default utils;
