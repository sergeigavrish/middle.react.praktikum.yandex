import React from 'react';

import './App.css';

import MainLayout from './core/MainLayout/MainLayout';
import ChatList from './components/Chat/List/ChatList';
import assembleMockState from './helpers/mockStateAssembler';
import { IChatCardProps } from './components/Chat/Card/IChatCardProps';
import sortHelper from './helpers/sortHelper';
import mapperHelper from './helpers/mapperHelper';

const { chatStorage } = assembleMockState();

function App() {
  const props: IChatCardProps[] = mapperHelper
    .mapChatInfoToChatCardProps(chatStorage)
    .sort((a, b) => sortHelper.sortByDate(a.lastMessage, b.lastMessage));
  return (
    <div className="App">
      <MainLayout sidebar={<ChatList chats={props} />} />
    </div>
  );
}

export default App;
