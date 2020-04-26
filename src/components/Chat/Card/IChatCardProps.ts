import { IChatInfo } from '../../../models/ichat-info';
import { IMessage } from '../../../models/imessage';
import { IUser } from '../../../models/iuser';

export interface IChatCardProps extends IChatInfo {
  lastMessage: IMessage;
  author: IUser;
}
