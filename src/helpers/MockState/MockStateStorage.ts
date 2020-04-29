import { v4 as uuid } from 'uuid';

import { IHashTable } from '../../models/interfaces/IHashTable';

import {
  storageAssembler,
  userFactoryWrapper,
  chatInfoFactoryWrapper,
  messagesFactoryWrapper,
} from './mockStateFactories';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IMockMessage } from './interfaces/IMockMessage';
import { IUser } from '../../models/interfaces/IUser';

export class MockStateStorage {
  private userStorage: IHashTable<IUser> = {};
  private chatStorage: IHashTable<IMockChatInfo> = {};
  private messageStorage: IHashTable<IMockMessage[]> = {};
  private initialized = false;

  private async init() {
    const { chatNames, usernames, messages } = await import('./mockStateDictionary.json');
    this.initializeStorage(chatNames, usernames, messages);
    this.initialized = true;
  }

  private initializeStorage(chatNames: string[], usernames: string[], messages: string[]) {
    this.userStorage = storageAssembler<IUser>(usernames.map(() => uuid()), userFactoryWrapper(usernames));
    this.chatStorage = storageAssembler<IMockChatInfo>(chatNames.map(() => uuid()), chatInfoFactoryWrapper(chatNames));
    this.messageStorage = storageAssembler<IMockMessage[]>(
      Object.keys(this.chatStorage),
      messagesFactoryWrapper(messages, Object.keys(this.userStorage)),
    );
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

  checkIfInitialized() {
    if (this.initialized) {
      return Promise.resolve();
    }
    return this.init();
  }
}
