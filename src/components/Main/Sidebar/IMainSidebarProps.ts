import { IChatInfo } from '../../../models/interfaces/IChatInfo';

export interface IMainSidebarProps {
  selectedChat: string;
  chatList: IChatInfo[];
  className: string;
  onChatSelected(chatId: string): void;
}
