import { IHashTable } from '../../models/interfaces/ihash-table';
import { IChatInfo } from '../../models/interfaces/ichat-info';
import { IUser } from '../../models/interfaces/iuser';
import { IMessage } from '../../models/interfaces/imessage';

export interface IMainLayoutState {
  selectedChat: null | string;
  chats: IHashTable<IChatInfo>;
  users: IHashTable<IUser>;
  messages: IHashTable<IMessage[]>;
}
