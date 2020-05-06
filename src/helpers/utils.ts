import { v4 as uuid } from 'uuid';

import { ITextMessage } from '../models/interfaces/IMessage';
import { MessageList } from '../models/types/MessageList';
import { MessageTypes } from '../models/enums/MessageTypes';

import { removeTimeFromTimestamp } from './dateHelper';

export const addServiceMessageToChatHistory = (messageList: ITextMessage[]): MessageList => {
  const dateSet: Set<number> = new Set();
  return messageList.reduce((acc: MessageList, m) => {
    const timestamp = removeTimeFromTimestamp(m.timestamp);
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
