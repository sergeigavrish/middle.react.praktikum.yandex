import { IMockChatInfo } from './IMockChatInfo';
import { IHashTable } from '../../../models/interfaces/IHashTable';
import { IMockMessage } from './IMockMessage';
import { IAuthData } from '../../../models/interfaces/IAuthData';
import { IMockUser } from './IMockUser';

export interface IStorage {
  getUserById(id: string): IMockUser;
  getChats(): IHashTable<IMockChatInfo>;
  getMessages(): IHashTable<IMockMessage[]>;
  getChatHistoryByChatId(id: string): IMockMessage[];
  addMessage(chatId: string, message: IMockMessage): void;
  addUser(user: IMockUser): void;
  getUser(authData: IAuthData): IMockUser | null;
}
