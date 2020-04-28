import { IChatCardProps } from '../Card/IChatCardProps';

export interface IChatListProps {
  chatList: IChatCardProps[];
  onChatSelected(chatId: string): void;
}
