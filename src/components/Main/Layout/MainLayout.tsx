import React, { Component } from 'react';

import { ChatHistory } from '../../Chat/History/ChatHistory';
import { ChatList } from '../../Chat/List/ChatList';

import { IMainLayoutState } from './IMainLayoutState';

import { mockService } from '../../../helpers/MockState/MockService';
import sortHelper from '../../../helpers/sortHelper';

import './MainLayout.css';

export class MainLayout extends Component<{}, IMainLayoutState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      selectedChat: '',
      chatList: [],
      chatHistory: {},
    };
  }

  async componentDidMount() {
    const chatList = await mockService.getChatList();
    this.setState({
      chatList,
    });
  }

  private onChatSelected = (selectedChat: string) => {
    this.setState(
      { selectedChat },
      () => this.loadChatHistory(),
    );
  }

  private getMessageList() {
    const { selectedChat, chatHistory: messages } = this.state;
    const history = messages[selectedChat];
    return history || [];
  }

  private getSortedChatList() {
    const { chatList } = this.state;
    return chatList.sort((a, b) => {
      return sortHelper.sortByDate(a.lastMessage.timestamp, b.lastMessage.timestamp);
    });
  }


  private loadChatHistory() {
    const { selectedChat, chatHistory: messages } = this.state;
    const isHistoryExist = messages[selectedChat];
    if (!isHistoryExist) {
      mockService.getChatHistoryByChatId(selectedChat)
        .then((chatHistory) => this.setState({
          chatHistory: { ...messages, [selectedChat]: chatHistory },
        }));
    }
  }

  render() {
    const { selectedChat } = this.state;
    const chatList = this.getSortedChatList();
    const messageList = this.getMessageList();
    return (
      <main className="layout">
        <aside className="layout__sidebar">
          <ChatList onChatSelected={this.onChatSelected} selectedChat={selectedChat} chatList={chatList} />
        </aside>
        <div className="layout__content">
          <ChatHistory messageList={messageList} />
        </div>
      </main>
    );
  }
}
