import { IUser } from './iuser';
import { MessageTypes } from './messageTypes';

export interface IMessageBase {
  guid: string;
  timestamp: number;
}

export interface IMessage extends IMessageBase {
  authorId: string;
  content: string;
}

export interface IMessageWithAuthor extends IMessageBase {
  author: IUser;
  content: string;
  type: MessageTypes.Text;
}

export interface IServiceMessage extends IMessageBase {
  type: MessageTypes.Service;
}

export type MessageList = Array<IServiceMessage | IMessageWithAuthor>;
