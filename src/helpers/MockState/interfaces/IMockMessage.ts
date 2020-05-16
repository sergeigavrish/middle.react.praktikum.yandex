import { MessageTypes } from '../../../enums/MessageTypes';

export interface IMockMessage {
  authorId: string;
  content: string;
  guid: string;
  timestamp: number;
  type: MessageTypes.Text;
}
