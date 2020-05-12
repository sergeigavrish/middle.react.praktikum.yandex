import { mockService } from '../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../helpers/utils';
import { mapTextMessageDtoToTextMessage, mapTextMessageToDto } from '../helpers/mapperHelper';
import { ITextMessage } from '../models/interfaces/IMessage';

export const getChatList = () => {
  return mockService.getChatList();
};

export const getChatHistoryByChatId = (chatId: string) => {
  return mockService.getChatHistoryByChatId(chatId)
    .then(mapTextMessageDtoToTextMessage)
    .then(addServiceMessageToChatHistory);
};

export const sendMessagetoChat = (chatId: string, message: ITextMessage) => {
  const dto = mapTextMessageToDto(message);
  return mockService.sendMessagetoChat(chatId, dto);
};
