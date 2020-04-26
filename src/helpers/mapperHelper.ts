import mockStateAssembler from './mockStateAssembler';
import { IChatInfo } from '../models/ichat-info';
import { IChatCardProps } from '../components/Chat/Card/IChatCardProps';

const mapChatInfoToChatCardProps = (chats: { [key: string]: IChatInfo }): IChatCardProps[] => {
  const { messageStorage, userStorage } = mockStateAssembler();
  return Object.keys(chats).map((chatId) => {
    const chatInfo = chats[chatId];
    const chatMessages = messageStorage[chatInfo.guid];
    const lastMessage = chatMessages[chatMessages.length - 1];
    const author = userStorage[lastMessage.authorId];
    return { ...chatInfo, lastMessage, author };
  });
};

const mapperHelper = {
  mapChatInfoToChatCardProps,
};

export default mapperHelper;
