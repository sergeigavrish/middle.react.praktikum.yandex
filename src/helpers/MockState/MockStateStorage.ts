import { v4 as uuid } from 'uuid';

import dictionary from './mockStateDictionary.json';

import { IHashTable } from '../../models/interfaces/IHashTable';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IMockMessage } from './interfaces/IMockMessage';
import { IUser } from '../../models/interfaces/IUser';
import { IStorage } from './interfaces/IStorage';
import { IMockUser } from './interfaces/IMockUser';
import { IAuthData } from '../../models/interfaces/IAuthData';

import {
  storageAssembler,
  userFactoryWrapper,
  chatInfoFactoryWrapper,
  messagesFactoryWrapper,
} from './mockStateFactories';
import { getUserData } from '../../services/sessionService';

export class MockStateStorage implements IStorage {
  private userStorage: IHashTable<IMockUser> = {};
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

  addUser(user: IMockUser) {
    this.userStorage[user.guid] = user;
  }

  getUser(authData: IAuthData): IMockUser | null {
    const user = Object.values(this.userStorage).filter((u) => u.name === authData.login)[0];
    if (user && user.password === authData.password) {
      return user;
    }
    return null;
  }

  private init() {
    const {
      chatNames,
      chatGuids,
      usernames,
      messages,
    } = dictionary;
    this.initializeStorage(chatNames, chatGuids, usernames, messages);
    this.initMockUser();
  }

  private initializeStorage(chatNames: string[], chatGuids: string[], usernames: string[], messages: string[]) {
    this.userStorage = storageAssembler<IUser>(usernames.map(() => uuid()), userFactoryWrapper(usernames));
    this.chatStorage = storageAssembler<IMockChatInfo>(chatGuids, chatInfoFactoryWrapper(chatNames));
    this.messageStorage = storageAssembler<IMockMessage[]>(
      chatGuids,
      messagesFactoryWrapper(messages, Object.keys(this.userStorage)),
    );
  }

  private initMockUser() {
    const user = getUserData();
    if (user) {
      this.userStorage[user.guid] = user;
    }
  }
}
