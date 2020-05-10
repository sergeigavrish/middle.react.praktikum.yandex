import { IUser } from './IUser';
import { MessageTypes } from '../enums/MessageTypes';

export interface IMessageBase {
  guid: string;
  timestamp: number;
}

export interface ITextMessageDto extends IMessageBase {
  author: IUser;
  content: string;
  type: MessageTypes.Text;
}

export interface ITextMessage extends ITextMessageDto {
  isChained: boolean;
}

export interface IServiceMessage extends IMessageBase {
  type: MessageTypes.Service;
}
