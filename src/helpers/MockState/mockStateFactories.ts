import { v4 as uuid } from 'uuid';

import { IMockMessage } from './interfaces/IMockMessage';
import { MessageTypes } from '../../models/enums/MessageTypes';
import { IHashTable } from '../../models/interfaces/IHashTable';

import { randomInteger, randomDate } from './mockStateHelpers';

import logo from '../../logo.svg';

export function messagesFactory(contentStorage: string[], authorIds: string[]): IMockMessage[] {
  const messagesNumber = randomInteger(contentStorage.length - 1);
  const messages: IMockMessage[] = [];
  for (let i = 0; i <= messagesNumber; i += 1) {
    const guid = uuid();
    const authorId = authorIds[randomInteger(authorIds.length - 1)];
    const content = contentStorage[randomInteger(contentStorage.length - 1)];
    const timestamp = randomDate(new Date(2020, 0, 1), new Date());
    messages.push({
      guid,
      authorId,
      content,
      timestamp,
      type: MessageTypes.Text,
    });
  }
  return messages;
}

export function storageAssembler<T>(keys: string[], factory: (k: string, i: number) => T): IHashTable<T> {
  return keys.reduce((acc: IHashTable<T>, key, i) => {
    acc[key] = factory(key, i);
    return acc;
  }, {});
}

export function userFactoryWrapper(usernames: string[]) {
  return (guid: string, index: number) => ({
    guid,
    name: usernames[index],
    avatar: logo,
  });
}

export function chatInfoFactoryWrapper(chatNames: string[]) {
  return (guid: string, index: number) => ({
    guid,
    name: chatNames[index],
    logo,
  });
}

export function messagesFactoryWrapper(messages: string[], users: string[]) {
  return () => messagesFactory(messages, users);
}
