import { v4 as uuid } from 'uuid';

import logo from '../logo.svg';
import mockStateDictionary from './mockStateDictionary';
import { IUser } from '../models/iuser';
import { IChatInfo } from '../models/ichat-info';
import { IMessage } from '../models/imessage';

function randomInteger(max: number) {
  const rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}

function messagesFactory(contentStorage: string[], authorIds: string[]): IMessage[] {
  const messagesNumber = randomInteger(contentStorage.length - 1);
  const messages = [];
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
    });
  }
  return messages;
}

function storageAssembler<T>(keys: string[], factory: (k: string, i: number) => T) {
  return keys.reduce((acc, key, i) => {
    acc[key] = factory(key, i);
    return acc;
  }, {} as { [key: string]: T });
}

function userFactoryWrapper(usernames: string[]) {
  return (guid: string, index: number) => ({
    guid,
    name: usernames[index],
    avatar: logo,
  });
}

function chatInfoFactoryWrapper(chatNames: string[]) {
  return (guid: string, index: number) => ({
    guid,
    name: chatNames[index],
    logo,
  });
}

function messagesFactoryWrapper(messages: string[], users: string[]) {
  return () => messagesFactory(messages, users);
}

function assembleMockState() {
  const userStorage = storageAssembler<IUser>(
    mockStateDictionary.usernames.map(() => uuid()),
    userFactoryWrapper(mockStateDictionary.usernames),
  );
  const chatStorage = storageAssembler<IChatInfo>(
    mockStateDictionary.usernames.map(() => uuid()),
    chatInfoFactoryWrapper(mockStateDictionary.chatNames),
  );
  const messageStorage = storageAssembler<IMessage[]>(
    Object.keys(chatStorage),
    messagesFactoryWrapper(mockStateDictionary.message, Object.keys(userStorage)),
  );
  return () => ({
    userStorage,
    chatStorage,
    messageStorage,
  });
}

export default assembleMockState();
