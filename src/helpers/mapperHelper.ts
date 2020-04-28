import { SyntheticEvent } from 'react';
import { IChatInfo } from '../models/ichat-info';
import { IHashTable } from '../models/ihash-table';
import { IUser } from '../models/iuser';
import { IMessage } from '../models/imessage';
import { IChatCardProps } from '../components/Chat/Card/IChatCardProps';

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


const mapperHelper = {
  mapChatInfoToChatCardProps,
};

export default mapperHelper;
