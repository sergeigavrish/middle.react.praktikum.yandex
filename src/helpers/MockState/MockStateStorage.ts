import { v4 as uuid } from 'uuid';

import { IHashTable } from '../../models/interfaces/IHashTable';

import dictionary from './mockStateDictionary.json';

import {
  storageAssembler,
  userFactoryWrapper,
  chatInfoFactoryWrapper,
  messagesFactoryWrapper,
} from './mockStateFactories';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IMockMessage } from './interfaces/IMockMessage';
import { IUser } from '../../models/interfaces/IUser';
import { IStorage } from './interfaces/IStorage';
import { MOCK_USER } from '../../models/constants/mockUser';

export class MockStateStorage implements IStorage {
  private userStorage: IHashTable<IUser> = {};
  private chatStorage: IHashTable<IMockChatInfo> = {};
  private messageStorage: IHashTable<IMockMessage[]> = {};

  constructor() {
    this.init();
  }

  getUserById(id: string) {
    return this.userStorage[id];
  }

  getChats() {
    return this.chatStorage;
  }

  getMessages() {
    return this.messageStorage;
  }

  getChatHistoryByChatId(id: string) {
    return this.messageStorage[id];
  }

  addMessage(chatId: string, message: IMockMessage) {
    this.messageStorage[chatId].push(message);
  }


  private init() {
    const {
      chatNames,
      chatGuids,
      usernames,
      messages,
    } = dictionary;
    this.initializeStorage(chatNames, chatGuids, usernames, messages);
    this.userStorage[MOCK_USER.guid] = MOCK_USER;
  }

  private initializeStorage(chatNames: string[], chatGuids: string[], usernames: string[], messages: string[]) {
    this.userStorage = storageAssembler<IUser>(usernames.map(() => uuid()), userFactoryWrapper(usernames));
    this.chatStorage = storageAssembler<IMockChatInfo>(chatGuids, chatInfoFactoryWrapper(chatNames));
    this.messageStorage = storageAssembler<IMockMessage[]>(
      chatGuids,
      messagesFactoryWrapper(messages, Object.keys(this.userStorage)),
    );
  }
}
