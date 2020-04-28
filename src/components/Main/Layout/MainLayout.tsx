import React, { Component } from 'react';

import { ChatHistory } from '../../Chat/History/ChatHistory';
import { ChatList } from '../../Chat/List/ChatList';

import { IChatInfo } from '../../../models/ichat-info';
import { IUser } from '../../../models/iuser';
import { IMessage } from '../../../models/imessage';
import { IHashTable } from '../../../models/ihash-table';

import mapperHelper from '../../../helpers/mapperHelper';
import sortHelper from '../../../helpers/sortHelper';
import mockStateAssembler from '../../../helpers/mockStateAssembler';

import './MainLayout.css';

interface IMainLayoutState {
  selectedChat: null | string;
  chats: IHashTable<IChatInfo>;
  users: IHashTable<IUser>;
  messages: IHashTable<IMessage[]>;
}

export class MainLayout extends Component<{}, IMainLayoutState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      selectedChat: null,
      chats: {},
      users: {},
      messages: {},
    };
  }

  async componentDidMount() {
    const { userStorage, chatStorage, messageStorage } = await mockStateAssembler();
    this.setState({
      chats: chatStorage,
      users: userStorage,
      messages: messageStorage,
    });
  }

  private onChatSelected = (chatId: string) => {
    this.setState({
      selectedChat: chatId,
    });
  }

  private getMessageList() {
    const { selectedChat, messages, users } = this.state;
    const selectedChatMessages = selectedChat ? messages[selectedChat] : [];
    return mapperHelper.mapMessageToMessageWithAuthor(selectedChatMessages, users);
  }

  private getChatList() {
    const {
      chats, users,
      messages, selectedChat,
    } = this.state;
    return mapperHelper.mapChatInfoToChatCardProps(
      chats, users,
      messages, selectedChat,
    );
  }

  render() {
    const chatList = this.getChatList().sort((a, b) => {
      return sortHelper.sortByDate(a.lastMessage.timestamp, b.lastMessage.timestamp);
    });
    const messageList = this.getMessageList();
    return (
      <main className="layout">
        <aside className="layout__sidebar">
          <ChatList onChatSelected={this.onChatSelected} chatList={chatList} />
        </aside>
        <div className="layout__content">
          <ChatHistory messageList={messageList} />
        </div>
      </main>
    );
  }
}
