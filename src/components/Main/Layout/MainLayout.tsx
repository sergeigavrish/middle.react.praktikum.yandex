import React, { Component } from 'react';

import { MainSidebar } from '../Sidebar/MainSidebar';
import { MainContent } from '../Content/MainContent';

import { IMainLayoutState } from './IMainLayoutState';

import { mockService } from '../../../helpers/MockState/MockService';
import { addServiceMessageToChatHistory } from '../../../helpers/utils';

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
    try {
      const chatList = await mockService.getChatList();
      this.setState({
        chatList,
      });
    } catch (err) {
      console.error(err);
    }
  }

  private onChatSelected = (selectedChat: string) => {
    this.setState(
      { selectedChat },
      () => this.loadChatHistory(),
    );
  }

  private onChatClosed = () => {
    this.setState({ selectedChat: '' });
  }

  private getMessageList() {
    const { selectedChat, chatHistory: messages } = this.state;
    const history = messages[selectedChat];
    return addServiceMessageToChatHistory(history || []);
  }

  private getSortedChatList() {
    const { chatList } = this.state;
    return chatList.sort((a, b) => a.lastMessage.timestamp - b.lastMessage.timestamp);
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
        <MainSidebar
          className={`${selectedChat ? 'hidden' : 'displayed'}`}
          onChatSelected={this.onChatSelected}
          selectedChat={selectedChat}
          chatList={chatList}
        />
        <MainContent
          className={`${selectedChat ? 'displayed' : 'hidden'}`}
          onChatClosed={this.onChatClosed}
          messageList={messageList}
        />
      </main>
    );
  }
}
