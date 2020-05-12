import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ChatList } from '../../Chat/List/ChatList';
import { WithQuery } from '../../../shared/WithQueryFromUrl/WithQuery';

import { IMainSidebarState } from './IMainSidebarState';
import { UrlQueryParams } from '../../../models/types/UrlQueryParams';
import { IWithQueryFromUrlInjectedProps } from '../../../shared/WithQueryFromUrl/IWithQueryFromUrlInjectedProps';

import { getChatList } from '../../../services/chatService';

import './MainSidebar.css';

export class MainSidebar extends Component<IWithQueryFromUrlInjectedProps, IMainSidebarState> {
  constructor(props: IWithQueryFromUrlInjectedProps) {
    super(props);
    this.state = {
      chatList: [],
    };
  }

  async componentDidMount() {
    try {
      const chatList = await getChatList();
      this.setState({
        chatList,
      });
    } catch (err) {
      console.error(err);
    }
  }


  private getSortedChatList() {
    const { chatList } = this.state;
    return chatList.sort((a, b) => a.lastMessage.timestamp - b.lastMessage.timestamp);
  }

  render() {
    const sortedChatList = this.getSortedChatList();
    const { dataId } = this.props;
    return (
      <aside className={`sidebar ${dataId ? 'hidden' : 'displayed'}`}>
        <ChatList selectedChat={dataId} chatList={sortedChatList} />
      </aside>
    );
  }
}

export const MainSidebarWithQuery = withRouter(WithQuery(UrlQueryParams.chatId)(MainSidebar));
