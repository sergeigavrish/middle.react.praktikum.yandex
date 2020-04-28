import { SyntheticEvent } from 'react';

import { IChatInfo } from '../../../models/ichat-info';
import { IMessage } from '../../../models/imessage';
import { IUser } from '../../../models/iuser';

export interface IChatCardProps {
  selected: boolean;
  chat: IChatInfo;
  lastMessage: IMessage;
  author: IUser;
  onChatSelected(e: SyntheticEvent<HTMLElement, MouseEvent>): void;
}
