import { v4 as uuid } from 'uuid';
import { IUser } from '../models/iuser';
import logo from '../logo.svg';
import { IChatInfo } from '../models/ichat-info';
import { IMessage } from '../models/imessage';
import mockStateDictionary from './mockStateDictionary';


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

function assembleMockState() {
  const userStorage = mockStateDictionary.usernames.reduce((acc, name) => {
    const userId = uuid();
    acc[userId] = {
      guid: userId,
      name,
      avatar: logo,
    };
    return acc;
  }, {} as { [userId: string]: IUser });
  const chatStorage = mockStateDictionary.chatNames.reduce((acc, name) => {
    const chatId = uuid();
    acc[chatId] = {
      guid: chatId,
      name,
      logo,
    };
    return acc;
  }, {} as { [chatId: string]: IChatInfo });
  const messageStorage = Object.keys(chatStorage).reduce((acc, key) => {
    acc[key] = messagesFactory(mockStateDictionary.message, Object.keys(userStorage));
    return acc;
  }, {} as { [chatId: string]: IMessage[] });
  return {
    userStorage,
    chatStorage,
    messageStorage,
  };
}

export default assembleMockState;
