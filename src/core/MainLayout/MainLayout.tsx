import React, { SyntheticEvent } from 'react';

import './MainLayout.css';
import { IChatInfo } from '../../models/ichat-info';
import { IUser } from '../../models/iuser';
import { IMessage } from '../../models/imessage';
import mockStateAssembler from '../../helpers/mockStateAssembler';
import mapperHelper from '../../helpers/mapperHelper';
import ChatList from '../../components/Chat/List/ChatList';
import { IHashTable } from '../../models/ihash-table';

interface IMainLayoutState {
  selectedChat: null | string;
  chats: IHashTable<IChatInfo>;
  users: IHashTable<IUser>;
  messages: IHashTable<IMessage[]>;
}

export default class MainLayout extends React.Component<{}, IMainLayoutState> {
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

  onChatSelected = (e: SyntheticEvent<HTMLElement, MouseEvent>) => {
    this.setState({
      selectedChat: e.currentTarget.dataset.guid as string,
    });
  }

  render() {
    const {
      chats,
      users,
      messages,
      selectedChat,
    } = this.state;
    const props = mapperHelper.mapChatInfoToChatCardProps(
      chats,
      users,
      messages,
      selectedChat,
      this.onChatSelected,
    );
    return (
      <main className="layout">
        <aside className="layout__sidebar">
          <ChatList chats={props} />
        </aside>
        <div className="layout__content" />
      </main>
    );
  }
}
