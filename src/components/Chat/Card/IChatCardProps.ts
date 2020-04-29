import { IChatInfo } from '../../../models/interfaces/IChatInfo';

export interface IChatCardProps extends IChatInfo {
  isSelected: boolean;
  onChatSelected(chatId: string): void;
}
