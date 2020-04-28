import React from 'react';

import './App.css';

import logo from './logo.svg';
import ChatCard from './components/Chat/Card/ChatCard';
import { IChatInfo } from './models/ichat-info';
import { IMessage } from './models/imessage';
import { IUser } from './models/iuser';

const chatStorage: { [chatId: string]: IChatInfo } = {
  '82dde7de-c57f-40d6-b0e0-68acfd96e6e8': {
    guid: '82dde7de-c57f-40d6-b0e0-68acfd96e6e8',
    name: 'First chat',
    logo,
  },
};

const userStorage: { [userId: string]: IUser } = {
  '3641c0d3-c497-4303-82af-2854f63fccdd': {
    name: 'John Travolta',
    avatar: logo,
    guid: '3641c0d3-c497-4303-82af-2854f63fccdd',
  },
};

const messageStorage: { [chatId: string]: IMessage[] } = {
  '82dde7de-c57f-40d6-b0e0-68acfd96e6e8': [
    {
      timestamp: 1580816220000,
      guid: 'ae503120-25c4-4508-b926-e718077f2915',
      authorId: '3641c0d3-c497-4303-82af-2854f63fccdd',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloribus quae officia exercitationem, enim quasi iste facilis impedit in asperiores expedita dolor facere vel nisi cum molestiae nobis deleniti ratione.',
    },
  ],
};

function App() {
  const chatInfo = chatStorage['82dde7de-c57f-40d6-b0e0-68acfd96e6e8'];
  const chatMessages = messageStorage['82dde7de-c57f-40d6-b0e0-68acfd96e6e8'];
  const lastMessage = chatMessages[chatMessages.length - 1];
  const author = userStorage[lastMessage.authorId];
  const props = { ...chatInfo, lastMessage, author };
  return (
    <div className="App">
      <ChatCard {...props} />
    </div>
  );
}

export default App;
