import { mockService } from '../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../helpers/utils';

export const getChatList = () => {
  return mockService.getChatList();
};

export const getChatHistoryByChatId = (id: string) => {
  return mockService.getChatHistoryByChatId(id).then(addServiceMessageToChatHistory);
};
