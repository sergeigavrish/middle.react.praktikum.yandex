import { IUser } from './IUser';
import { MessageTypes } from '../enums/MessageTypes';

export interface IMessageBase {
  guid: string;
  timestamp: number;
}

export interface ITextMessage extends IMessageBase {
  author: IUser;
  content: string;
  type: MessageTypes.Text;
}

export interface IServiceMessage extends IMessageBase {
  type: MessageTypes.Service;
}
