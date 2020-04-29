/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */

import { MockStateStorage } from './MockStateStorage';
import { IChatInfo } from '../../models/interfaces/IChatInfo';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IHashTable } from '../../models/interfaces/IHashTable';
import { IMockMessage } from './interfaces/IMockMessage';
import { ITextMessage } from '../../models/interfaces/IMessage';

class MockService {
  constructor(private storage: MockStateStorage) { }

  async getChatList(): Promise<IChatInfo[]> {
    await this.storage.checkIfInitialized();
    const chats = this.storage.getChats();
    const messages = this.storage.getMessages();
    const chatInfo: IChatInfo[] = this.mapToChatInfo(chats, messages);
    return chatInfo;
  }

  async getChatHistoryByChatId(chatId: string): Promise<ITextMessage[]> {
    await this.storage.checkIfInitialized();
    const history = this.storage.getChatHistoryByChatId(chatId);
    return this.mapToMessage(history);
  }

  private mapToMessage(history: IMockMessage[]) {
    return history.map((m) => {
      const { authorId, ...lastMessage } = m;
      return { ...lastMessage, author: this.storage.getUserById(authorId) };
    });
  }

  private mapToChatInfo(
    chats: IHashTable<IMockChatInfo>,
    messages: IHashTable<IMockMessage[]>,
  ): IChatInfo[] {
    return Object.keys(chats)
      .map((chatId) => {
        const chat = chats[chatId];
        const chatMessages = messages[chat.guid];
        const { authorId, ...lastMessage } = chatMessages[chatMessages.length - 1];
        return {
          ...chat,
          lastMessage: {
            ...lastMessage,
            author: this.storage.getUserById(authorId),
          },
        };
      });
  }
}

export const mockService = new MockService(new MockStateStorage());
