import { SyntheticEvent } from 'react';

import { v4 as uuid } from 'uuid';

import { IChatInfo } from '../models/ichat-info';
import { IHashTable } from '../models/ihash-table';
import { IUser } from '../models/iuser';
import { IMessage, MessageList } from '../models/imessage';
import { IChatCardProps } from '../components/Chat/Card/IChatCardProps';
import { MessageTypes } from '../models/messageTypes';
import dateHelper from './dateHelper';

const mapChatInfoToChatCardProps = (
  chats: IHashTable<IChatInfo>,
  users: IHashTable<IUser>,
  messages: IHashTable<IMessage[]>,
  selected: string | null,
  onChatSelected: (e: SyntheticEvent<HTMLElement, MouseEvent>) => void,
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
      onChatSelected,
    };
  });

const mapMessageToMessageWithAuthor = (
  messageList: IMessage[],
  users: IHashTable<IUser>,
): MessageList => {
  const dateSet: Set<number> = new Set();
  return messageList.reduce((acc, m) => {
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
  }, [] as MessageList);
};

const mapperHelper = {
  mapChatInfoToChatCardProps,
  mapMessageToMessageWithAuthor,
};

export default mapperHelper;
