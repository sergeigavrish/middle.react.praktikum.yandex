import { IChatInfo } from '../../../models/interfaces/IChatInfo';

export interface IChatListProps {
  chatList: IChatInfo[];
  selectedChat: string;
}