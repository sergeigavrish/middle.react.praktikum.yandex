import { mockService } from '../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../helpers/utils';
import { mapTextMessageDtoToTextMessage } from '../helpers/mapperHelper';

export const getChatList = () => {
  return mockService.getChatList();
};

export const getChatHistoryByChatId = (id: string) => {
  return mockService.getChatHistoryByChatId(id)
    .then(mapTextMessageDtoToTextMessage)
    .then(addServiceMessageToChatHistory);
};
