import { IHashTable } from '../../../models/interfaces/IHashTable';
import { IChatInfo } from '../../../models/interfaces/IChatInfo';
import { ITextMessage } from '../../../models/interfaces/IMessage';

export interface IMainLayoutState {
  selectedChat: string;
  chatList: IChatInfo[];
  chatHistory: IHashTable<ITextMessage[]>;
}
