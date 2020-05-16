import { mockService } from '../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../helpers/utils';
import { mapToChainedMessageList, maptMessageToTextMessageDto, mapTextMessageDtoToTextMessage } from '../helpers/mapperHelper';
import { ITextMessage } from '../interfaces/IMessage';
import { getUserData } from './sessionService';
import { MessageList } from '../types/MessageList';
import { IChatInfo } from '../interfaces/IChatInfo';

export const getChatList = (): Promise<IChatInfo[]> => {
  return mockService.getChatList();
};

export const getChatHistoryByChatId = (chatId: string): Promise<MessageList> => {
  return mockService.getChatHistoryByChatId(chatId)
    .then((dtoList) => dtoList.map((dto) => mapTextMessageDtoToTextMessage(dto)))
    .then(addServiceMessageToChatHistory)
    .then(mapToChainedMessageList)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const sendMessagetoChat = (chatId: string, content: string): Promise<ITextMessage> => {
  const user = getUserData();
  if (user) {
    const dto = maptMessageToTextMessageDto(content, user);
    return mockService.sendMessagetoChat(chatId, dto)
      .then((res) => mapTextMessageDtoToTextMessage(res));
  }
  return Promise.reject();
};
