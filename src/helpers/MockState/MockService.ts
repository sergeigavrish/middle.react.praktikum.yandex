/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */

import { MockStateStorage } from './MockStateStorage';
import { IChatInfo } from '../../models/interfaces/IChatInfo';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IHashTable } from '../../models/interfaces/IHashTable';
import { IMockMessage } from './interfaces/IMockMessage';
import { ITextMessageDto } from '../../models/interfaces/IMessage';
import { IStorage } from './interfaces/IStorage';

class MockService {
  constructor(private storage: IStorage) { }

  getChatList(): Promise<IChatInfo[]> {
    const chats = this.storage.getChats();
    const messages = this.storage.getMessages();
    const chatInfo: IChatInfo[] = this.mapToChatInfo(chats, messages);
    return Promise.resolve(chatInfo);
  }

  getChatHistoryByChatId(chatId: string): Promise<ITextMessageDto[]> {
    const history = this.storage.getChatHistoryByChatId(chatId);
    const messageList = this.mapToMessage(history);
    return Promise.resolve(messageList);
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
