import { v4 as uuid } from 'uuid';

import { ITextMessageDto, ITextMessage } from '../interfaces/IMessage';

import { MessageTypes } from '../enums/MessageTypes';
import { IUser } from '../interfaces/IUser';
import { MessageList } from '../types/MessageList';
import { isTextMessageChained } from './utils';

export const mapToChainedMessageList = (arr: MessageList): MessageList => {
  return arr.map((m, i) => {
    if (m.type === MessageTypes.Text) {
      const prevMessage = arr[i - 1];
      return isTextMessageChained(m, prevMessage);
    }
    return m;
  });
};

export const maptMessageToTextMessageDto = (content: string, author: IUser): ITextMessageDto => {
  return {
    content,
    author,
    timestamp: new Date().getTime(),
    guid: uuid(),
    type: MessageTypes.Text,
  };
};

export const mapTextMessageDtoToTextMessage = (dto: ITextMessageDto): ITextMessage => {
  return {
    content: dto.content,
    author: dto.author,
    timestamp: dto.timestamp,
    guid: dto.guid,
    type: MessageTypes.Text,
    isChained: false,
  };
};
