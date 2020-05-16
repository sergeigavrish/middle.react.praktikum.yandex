import { v4 as uuid } from 'uuid';

import { ITextMessage } from '../interfaces/IMessage';
import { MessageList } from '../types/MessageList';
import { MessageTypes } from '../enums/MessageTypes';
import { Message } from '../types/Message';

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

export const isTextMessageChained = (current: ITextMessage, prev: Message): ITextMessage => {
  const isSameAuthor = prev?.type !== MessageTypes.Service && prev?.author.guid === current.author.guid;
  const isSameDate = removeTimeFromTimestamp(prev?.timestamp) === removeTimeFromTimestamp(current.timestamp);
  if (isSameAuthor && isSameDate) {
    return { ...current, isChained: true };
  }
  return { ...current, isChained: false };
};
