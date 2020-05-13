import { mockService } from '../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../helpers/utils';
import { mapTextMessageDtoToTextMessage, maptMessageToTextMessageDto, maptTextMessageDtoToTextMessage } from '../helpers/mapperHelper';
import { ITextMessage } from '../models/interfaces/IMessage';
import { getUserData } from './sessionService';
import { MessageList } from '../models/types/MessageList';
import { IChatInfo } from '../models/interfaces/IChatInfo';

export const getChatList = (): Promise<IChatInfo[]> => {
  return mockService.getChatList();
};

export const getChatHistoryByChatId = (chatId: string): Promise<MessageList> => {
  return mockService.getChatHistoryByChatId(chatId)
    .then((dtoList) => dtoList.map((dto) => maptTextMessageDtoToTextMessage(dto)))
    .then(addServiceMessageToChatHistory)
    .then(mapTextMessageDtoToTextMessage);
};

export const sendMessagetoChat = (chatId: string, content: string): Promise<ITextMessage> => {
  const user = getUserData();
  if (user) {
    const dto = maptMessageToTextMessageDto(content, user);
    return mockService.sendMessagetoChat(chatId, dto)
      .then((res) => maptTextMessageDtoToTextMessage(res));
  }
  return Promise.reject();
};
