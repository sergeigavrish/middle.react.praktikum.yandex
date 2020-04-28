import { IChatInfo } from '../../../models/interfaces/ichat-info';
import { IMessage } from '../../../models/interfaces/imessage';
import { IUser } from '../../../models/interfaces/iuser';

export interface IChatCardProps {
  selected: boolean;
  chat: IChatInfo;
  lastMessage: IMessage;
  author: IUser;
}

export interface IChatCardPropsWithHandlers extends IChatCardProps {
  onChatSelected(chatId: string): void;
}
