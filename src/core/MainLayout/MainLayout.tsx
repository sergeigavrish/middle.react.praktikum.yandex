import React, { SyntheticEvent, Component } from 'react';

import './MainLayout.css';
import { IChatInfo } from '../../models/ichat-info';
import { IUser } from '../../models/iuser';
import { IMessage } from '../../models/imessage';
import mockStateAssembler from '../../helpers/mockStateAssembler';
import mapperHelper from '../../helpers/mapperHelper';
import ChatList from '../../components/Chat/List/ChatList';
import { IHashTable } from '../../models/ihash-table';
import ChatHistory from '../../components/Chat/History/ChatHistory';

interface IMainLayoutState {
  selectedChat: null | string;
  chats: IHashTable<IChatInfo>;
  users: IHashTable<IUser>;
  messages: IHashTable<IMessage[]>;
}

export default class MainLayout extends Component<{}, IMainLayoutState> {
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

  private onChatSelected = (e: SyntheticEvent<HTMLElement, MouseEvent>) => {
    this.setState({
      selectedChat: e.currentTarget.dataset.guid as string,
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
      this.onChatSelected,
    );
  }

  render() {
    const chatList = this.getChatList();
    const messageList = this.getMessageList();
    return (
      <main className="layout">
        <aside className="layout__sidebar">
          <ChatList chatList={chatList} />
        </aside>
        <div className="layout__content">
          <ChatHistory messageList={messageList} />
        </div>
      </main>
    );
  }
}
