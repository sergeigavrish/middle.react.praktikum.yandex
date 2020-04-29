import { ITextMessage } from './IMessage';

export interface IChatInfo {
    guid: string;
    logo: string;
    name: string;
    lastMessage: ITextMessage;
}
