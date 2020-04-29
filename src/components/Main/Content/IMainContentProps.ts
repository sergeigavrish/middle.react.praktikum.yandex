import { MessageList } from '../../../models/types/MessageList';

export interface IMainContentProps {
  messageList: MessageList;
  className: string;
  onChatClosed(): void;
}
