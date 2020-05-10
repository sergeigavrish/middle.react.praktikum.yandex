import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ChatList } from '../../Chat/List/ChatList';
import { WithQuery } from '../../../shared/WithQueryFromUrl/WithQuery';

import { IMainSidebarState } from './IMainLayoutState';
import { UrlQueryParams } from '../../../models/types/UrlQueryParams';
import { IWithQueryFromUrlInjectedProps } from '../../../shared/WithQueryFromUrl/IWithQueryFromUrlInjectedProps';

import { mockService } from '../../../helpers/MockState/MockService';

import './MainSidebar.css';

export class MainSidebar extends Component<IWithQueryFromUrlInjectedProps, IMainSidebarState> {
  constructor(props: { param: string }) {
    super(props);
    this.state = {
      chatList: [],
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


  private getSortedChatList() {
    const { chatList } = this.state;
    return chatList.sort((a, b) => a.lastMessage.timestamp - b.lastMessage.timestamp);
  }

  render() {
    const sortedChatList = this.getSortedChatList();
    const { param } = this.props;
    return (
      <aside className={`sidebar ${param ? 'hidden' : 'displayed'}`}>
        <ChatList selectedChat={param} chatList={sortedChatList} />
      </aside>
    );
  }
}

export const MainSidebarWithQuery = withRouter(WithQuery(UrlQueryParams.chatId)(MainSidebar));
