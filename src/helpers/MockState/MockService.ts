/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
import { v4 as uuid } from 'uuid';

import { MockStateStorage } from './MockStateStorage';
import { IChatInfo } from '../../interfaces/IChatInfo';
import { IMockChatInfo } from './interfaces/IMockChatInfo';
import { IHashTable } from '../../interfaces/IHashTable';
import { IMockMessage } from './interfaces/IMockMessage';
import { ITextMessageDto } from '../../interfaces/IMessage';
import { IStorage } from './interfaces/IStorage';
import { IAuthData } from '../../interfaces/IAuthData';
import { IUser } from '../../interfaces/IUser';
import { IMockUser } from './interfaces/IMockUser';

import avatar from '../../logo.svg';

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
    const messageList = history.map((m) => this.mapToMessage(m));
    return Promise.resolve(messageList);
  }

  sendMessagetoChat(chatId: string, dto: ITextMessageDto): Promise<ITextMessageDto> {
    const { author, ...rest } = dto;
    const message: IMockMessage = { ...rest, authorId: author.guid };
    this.storage.addMessage(chatId, message);
    return Promise.resolve(this.mapToMessage(message));
  }

  signUp(dto: IAuthData): Promise<IUser> {
    const user: IMockUser = {
      guid: uuid(),
      avatar,
      name: dto.login,
      password: dto.password,
    };
    this.storage.addUser(user);
    const { password, ...userDto } = user;
    return Promise.resolve(userDto);
  }

  signIn(dto: IAuthData): Promise<IUser> {
    const user = this.storage.getUser(dto);
    if (user) {
      const { password, ...userDto } = user;
      return Promise.resolve(userDto);
    }
    return Promise.reject();
  }

  private mapToMessage(m: IMockMessage): ITextMessageDto {
    return {
      guid: m.guid,
      timestamp: m.timestamp,
      author: this.storage.getUserById(m.authorId),
      content: m.content,
      type: m.type,
    };
  }

  private mapToChatInfo(
    chats: IHashTable<IMockChatInfo>,
    messages: IHashTable<IMockMessage[]>,
  ): IChatInfo[] {
    return Object.keys(chats)
      .map((chatId) => {
        const chat = chats[chatId];
        const chatMessages = messages[chat.guid];
        const message = chatMessages[chatMessages.length - 1];
        return {
          ...chat,
          lastMessage: this.mapToMessage(message),
        };
      });
  }
}

export const mockService = new MockService(new MockStateStorage());
