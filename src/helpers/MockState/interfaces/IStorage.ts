import { IUser } from '../../../models/interfaces/IUser';
import { IMockChatInfo } from './IMockChatInfo';
import { IHashTable } from '../../../models/interfaces/IHashTable';
import { IMockMessage } from './IMockMessage';

export interface IStorage {
  getUserById(id: string): IUser;
  getChats(): IHashTable<IMockChatInfo>;
  getMessages(): IHashTable<IMockMessage[]>;
  getChatHistoryByChatId(id: string): IMockMessage[];
  addMessage(chatId: string, message: IMockMessage): void;
}
