import { v4 as uuid } from 'uuid';

import { IChatCardProps } from '../components/Chat/Card/IChatCardProps';
import { IChatInfo } from '../models/interfaces/ichat-info';
import { IHashTable } from '../models/interfaces/ihash-table';
import { IUser } from '../models/interfaces/iuser';
import { IMessage } from '../models/interfaces/imessage';
import { MessageTypes } from '../models/enums/MessageTypes';
import { MessageList } from '../models/types/MessageList';

import dateHelper from './dateHelper';

const mapChatInfoToChatCardProps = (
  chats: IHashTable<IChatInfo>,
  users: IHashTable<IUser>,
  messages: IHashTable<IMessage[]>,
  selected: string | null,
): IChatCardProps[] => Object
  .keys(chats)
  .map((chatId) => {
    const chat = chats[chatId];
    const chatMessages = messages[chat.guid];
    const lastMessage = chatMessages[chatMessages.length - 1];
    const author = users[lastMessage.authorId];
    return {
      chat,
      lastMessage,
      author,
      selected: selected === chat.guid,
    };
  });

const mapMessageToMessageWithAuthor = (
  messageList: IMessage[],
  users: IHashTable<IUser>,
): MessageList => {
  const dateSet: Set<number> = new Set();
  return messageList.reduce((acc: MessageList, m) => {
    const timestamp = dateHelper.removeTimeFromTimestamp(m.timestamp);
    if (!dateSet.has(timestamp)) {
      dateSet.add(timestamp);
      acc.push({
        guid: uuid(),
        timestamp: m.timestamp,
        type: MessageTypes.Service,
      });
    }
    acc.push({
      guid: m.guid,
      timestamp: m.timestamp,
      content: m.content,
      author: users[m.authorId],
      type: MessageTypes.Text,
    });
    return acc;
  }, []);
};

const mapperHelper = {
  mapChatInfoToChatCardProps,
  mapMessageToMessageWithAuthor,
};

export default mapperHelper;
