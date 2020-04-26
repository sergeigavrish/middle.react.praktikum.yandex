import React from 'react';

import './App.css';

import MainLayout from './core/MainLayout/MainLayout';
import ChatList from './components/Chat/List/ChatList';
import assembleMockState from './helpers/mockStateAssembler';
import { IChatCardProps } from './components/Chat/Card/IChatCardProps';

const { chatStorage, userStorage, messageStorage } = assembleMockState();

function App() {
  const props: IChatCardProps[] = Object.keys(chatStorage).map((chatId) => {
    const chatInfo = chatStorage[chatId];
    const chatMessages = messageStorage[chatInfo.guid];
    const lastMessage = chatMessages[chatMessages.length - 1];
    const author = userStorage[lastMessage.authorId];
    return { ...chatInfo, lastMessage, author };
  });
  return (
    <div className="App">
      <MainLayout sidebar={<ChatList chats={props} />} />
    </div>
  );
}

export default App;
